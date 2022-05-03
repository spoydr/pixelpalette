<script>
	import { score } from '../stores.js';

    let scoreValue;

    score.subscribe(value => {
        scoreValue = value;
    });
</script>

<h2 class="text-sm font-sans uppercase font-black bg-neutral-600 px-4 py-2 text-green-300 flex items-center">Score: {scoreValue} </h2>