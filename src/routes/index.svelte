<script>
    import { paintingsData } from '../data.js';
    import Guessbutton from '$lib/guessbutton.svelte';
    import Scoreboard from '$lib/scoreboard.svelte';
    import { activePrompt, revealState } from '../stores.js';
    import { score, shuffle } from '../stores';
    import { fade, scale, slide } from "svelte/transition";


    // shuffle the array of paintings in a random order
    let shuffledPaintings = shuffle([...paintingsData]);

    // take the first 4 of the shuffled paintings as answer options
    let chosenPaintings = [...(shuffledPaintings.slice(0,4))];
    let scrambledAnswers = shuffle([...chosenPaintings]); //create new array of answer options in random order (for guess buttons)

    // store the 4 answer options in a global variable, marking the first one as the correct answer.
    let currentPrompt = {
        option1 : chosenPaintings[0],
        option2 : chosenPaintings[1],
        option3 : chosenPaintings[2],
        option4 : chosenPaintings[3],
        correctAnswer : chosenPaintings[0]
    };

    activePrompt.set(currentPrompt);

    const newPrompt = () => {
        shuffledPaintings = shuffle([...shuffledPaintings]);

        chosenPaintings = [...(shuffledPaintings.slice(0,4))];
        correctAnswer = chosenPaintings[0];
        scrambledAnswers = shuffle([...chosenPaintings]);
        paintingPromptPath = `./img/pixelated_full/${correctAnswer.id}.jpeg`;
        revealedPaintingPath = `./img/${correctAnswer.id}.jpeg`;

        let currentPrompt = {
        option1 : chosenPaintings[0],
        option2 : chosenPaintings[1],
        option3 : chosenPaintings[2],
        option4 : chosenPaintings[3],
        correctAnswer : chosenPaintings[0]
        };

        
        revealState.set(false);
        activePrompt.set(currentPrompt);
        
    };

    let correctAnswer = $activePrompt.correctAnswer;

    $: paintingPromptPath = `./img/pixelated_full/${correctAnswer.id}.jpeg`;
    $: revealedPaintingPath = `./img/${correctAnswer.id}.jpeg`;

    // GUESS HANDLER LOGIC
    const guessHandler = (pickedGuess) => {
        if(pickedGuess === correctAnswer) {
            console.log('correctemundo!');
            score.update(n => n + 1);

        }
        else {
            console.log('wrong answer bitch boi');
            score.set(0);
        }
        paintingPromptPath = revealedPaintingPath;
    }

</script>

<div class="index flex flex-col items-center h-screen ">
    <div class="header h-[8%] md:h-[15%] w-full flex items-center justify-center">
        <h1 class="text-2xl md:text-5xl font-bold text-center">👾🎨 PixelPalette 0.1</h1>
    </div>
    

    <div class="painting-prompt max-h-xl h-2/5 sm:h-2/5 bg-black w-full sm:w-auto p-4 justify-center flex ">
        {#if $revealState}
            <img src="{paintingPromptPath}" alt="{paintingPromptPath}" class="max-w-screen max-h-full md:h-full ">
        {:else}
            <img src="{paintingPromptPath}" alt="{paintingPromptPath}" class="max-w-screen max-h-full md:h-full ">
        {/if}
    </div>
    <div class="flex flex-row justify-evenly w-full h-[7%] py-2 sm:max-w-screen-md">
        {#if $revealState}
                <Scoreboard/>
                <button in:scale on:click={newPrompt} class='bg-yellow-200 hover:bg-yellow-400 text-xs md:text-base border-2 border-black px-4 py-2'>♻️ Next Painting</button>   
        {:else}
            <button disabled in:slide class='bg-white text-gray-500 text-xs md:text-base px-4 py-2'>👨🏽‍🎨 Guess the artwork hidden behind the pixels!</button>
        {/if}
    </div>

    <div class="answer-buttons h-[40%] flex flex-col space-y-2 md:space-y-4 pb-4 md:pb-6">
        {#each scrambledAnswers as guessOption}
            <Guessbutton scrambledAnswer={guessOption} on:click={guessHandler(guessOption)}/>
        {/each}
    </div>



</div>

<style></style>