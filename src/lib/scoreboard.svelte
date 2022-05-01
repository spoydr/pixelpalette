<script>
	import { score } from '../stores.js';

    let scoreValue;

    score.subscribe(value => {
        scoreValue = value;
    });
</script>

<h2 class="text-sm font-sans uppercase font-black bg-gray-700 px-4 py-2 text-green-300">Win streak: {scoreValue} </h2>