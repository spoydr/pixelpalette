<script>
    import { afterUpdate } from 'svelte';
    export let scrambledAnswer = {};
    import { activePrompt } from '../stores.js';
    import { revealState } from '../stores.js';

    let buttonColor = 'bg-white';

    export const assignRevealColor = () => { // changes button color to green if correct, red if false
        if (scrambledAnswer === $activePrompt.correctAnswer) {
            buttonColor = 'bg-green-200';
        }
        else buttonColor = 'bg-red-200';
        };
    
    afterUpdate(() => {
        assignRevealColor();
    });
    assignRevealColor();

    const activateRevealState = () => {
        $revealState = true;
    }

</script>

{#if !$revealState}
    <button class="drop-shadow-md h-[20%] flex flex-col justify-center px-4 w-full md:max-w-md hover:bg-yellow-200 bg-white text-xs md:text-sm " on:click on:click={activateRevealState}>
        <span class="font-bold">{scrambledAnswer.artistFirstName} {scrambledAnswer.artistLastName}</span>
        <span class="text-left">{scrambledAnswer.title}, {scrambledAnswer.year}</span>
    </button>
{:else}
    <button disabled class="drop-shadow-md h-[20%] flex flex-col justify-center px-4 w-full md:max-w-md text-xs md:text-sm {buttonColor}">
        <span class="font-bold">{scrambledAnswer.artistFirstName} {scrambledAnswer.artistLastName}</span>
        <span class="text-left">{scrambledAnswer.title}, {scrambledAnswer.year}</span>
    </button>
{/if}
