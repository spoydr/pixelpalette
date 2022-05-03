<script>
    import { paintingsData } from '../data.js';
    import Guessbutton from '$lib/guessbutton.svelte';
    import Scoreboard from '$lib/scoreboard.svelte';
    import { activePrompt, revealState } from '../stores.js';
    import { score, shuffle } from '../stores';
    import { fade, scale, slide } from "svelte/transition";
    import Gtag from '$lib/gtag.svelte';


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
        if(shuffledPaintings.length > 4) {
            shuffledPaintings.shift();
            shuffledPaintings = shuffle([...shuffledPaintings]);
            chosenPaintings = [...(shuffledPaintings.slice(0,4))];
        }
        else {
            shuffledPaintings = shuffle([...paintingsData]);
            chosenPaintings = [...(shuffledPaintings.slice(0,4))];
            console.log('reset succes!')
        }
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

    $: paintingPromptPath = `./img/pixelated_full/${correctAnswer.id}.jpg`;
    $: revealedPaintingPath = `./img/${correctAnswer.id}.jpg`;

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

<Gtag />
<div class="index flex flex-col items-center h-screen bg-neutral-200">
    <div class="header h-12 sm:h-20 w-full flex items-center justify-center bg-neutral-400">
        <h1 class="text-2xl md:text-5xl font-bold font-mono text-center text-white">PIXELPALETTE</h1>
        
    </div>
    

    <div class="painting-prompt max-h-xl h-80 sm:h-96 bg-neutral-400 w-full p-4 justify-center flex ">
        {#if $revealState}
            <img src="{paintingPromptPath}" alt="{correctAnswer.title} by {correctAnswer.artistFirstName} {correctAnswer.artistLastName}" class="max-w-screen max-h-full md:h-full shadow-lg ">
        {:else}
            <img src="{paintingPromptPath}" alt="" class="max-w-screen shadow-lg max-h-full md:h-full ">
        {/if}
    </div>
    <div class="flex flex-row justify-between md:justify-evenly w-full md:max-w-screen-sm h-[7%] py-2 px-8 bg-neutral-200 sm:max-w-screen-md">
        {#if $revealState}
            <Scoreboard/>
            <button on:click={newPrompt} class='bg-yellow-200 hover:bg-yellow-400 text-xs md:text-base border-2 border-black px-4 py-2'>♻️ Next Painting</button>   
        {:else}
            <Scoreboard/>
            <button on:click={newPrompt} disabled class='bg-yellow-200 opacity-0 hover:bg-yellow-400 text-xs md:text-base border-2 border-black px-4 py-2'>♻️ Next Painting</button> 
        {/if}
    </div>

    <div class="answer-buttons flex flex-col space-y-2 px-8 bg-neutral-200 md:space-y-4">
        {#each scrambledAnswers as guessOption}
            <Guessbutton scrambledAnswer={guessOption} on:click={guessHandler(guessOption)}/>
        {/each}
    </div>

    <div class="text-gray-400 text-xs md:text-base bg-neutral-200 w-full text-right pr-[10%] mt-auto py-2"><a href="https://studiofoyne.com" target=_blank>Made by <span class="underline font-bold">Studio Foyne</span></a></div>

</div>

<style></style>