<script>
	import { score } from '../stores.js';
    import { fly } from 'svelte/transition';


    let scoreValue;

    score.subscribe(value => {
        scoreValue = value;
    });
</script>

{#key scoreValue}
    <div class="text-sm font-sans text-white flex flex-row justify-between w-[25%] md:w-[12%]">
        <span class="font-bold pr-2">Score:</span>
        <div in:fly={{ y: -20 }}>{scoreValue}</div>
    </div>
{/key}