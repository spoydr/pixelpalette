<script>
	import { score, highScore } from '../stores.js';
    import { fly } from 'svelte/transition';

    $: score;
    $: highScore;

</script>

<div class="flex flex-col">
    {#key $score}
        <div class="text-sm font-sans text-white flex flex-row justify-between md:w-[12%]">
            <span class="font-bold pr-2">Score:</span>
            <div in:fly={{ y: -20 }}>{$score}</div>
        </div>
    {/key}
    {#key $highScore}
        <div class="text-sm font-sans text-neutral-400 flex flex-row justify-between md:w-[12%]">
            <span class="font-bold pr-2">Best:</span>
            <div in:fly={{ y: -20 }}>{$highScore}</div>
        </div>
    {/key}
</div>
