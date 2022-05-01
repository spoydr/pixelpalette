<script>
    import { afterUpdate } from 'svelte';
    export let scrambledAnswer = {};
    import { score } from '../stores';
    import { activePrompt } from '../stores.js';
    import { revealState } from '../stores.js';

    let buttonColor = 'bg-white';

    export const assignRevealColor = () => {
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
    <button class="border-2 border-black px-4 py-2 hover:bg-yellow-200 bg-white text-sm md:text-base" on:click on:click={activateRevealState}>
        <span class="font-bold">{scrambledAnswer.title}</span>
        <span>by {scrambledAnswer.artistFirstName} {scrambledAnswer.artistLastName} ({scrambledAnswer.year})</span>
    </button>
{:else}
    <button disabled class="border-2 border-black px-4 py-2 {buttonColor}">
        <span class="font-bold">{scrambledAnswer.title}</span>
        <span>by {scrambledAnswer.artistFirstName} {scrambledAnswer.artistLastName} ({scrambledAnswer.year})</span>
    </button>
{/if}
