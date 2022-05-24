<script>
    import { paintingsData } from '../data.js';
    import Guessbutton from '$lib/guessbutton.svelte';
    import Scoreboard from '$lib/scoreboard.svelte';
    import { score, highScore, shuffle, activePrompt, revealState, difficulty } from '../stores.js';

    // shuffle the array of paintings in a random order
    let shuffledPaintings = shuffle([...paintingsData]);

    // take the first 4 of the shuffled paintings as answer options
    let chosenPaintings = [...(shuffledPaintings.slice(0,3))];
    let scrambledAnswers = shuffle([...chosenPaintings]); //create new array of answer options in random order (for guess buttons)

    // store the correct answer in a global variable
    let currentPrompt = {
        correctAnswer : chosenPaintings[0]
    };

    activePrompt.set(currentPrompt);

    const newPrompt = () => { // reshuffles remaining paintings and picks a new painting
        if(shuffledPaintings.length > 3) {
            shuffledPaintings.shift();
            shuffledPaintings = shuffle([...shuffledPaintings]);
            chosenPaintings = [...(shuffledPaintings.slice(0,3))];
        }
        else {
            shuffledPaintings = shuffle([...paintingsData]);
            chosenPaintings = [...(shuffledPaintings.slice(0,3))];
            console.log('reset succes!')
        }
        correctAnswer = chosenPaintings[0];
        scrambledAnswers = shuffle([...chosenPaintings]);
        paintingPromptPath = `./img/pixelated_${$difficulty}/${correctAnswer.id}.jpeg`;
        revealedPaintingPath = `./img/${correctAnswer.id}.jpeg`;

        let currentPrompt = {
        correctAnswer : chosenPaintings[0]
        };

        revealState.set(false);
        activePrompt.set(currentPrompt);
        
    };

    let correctAnswer = $activePrompt.correctAnswer;

    $: paintingPromptPath = `./img/pixelated_${$difficulty}/${correctAnswer.id}.jpg`;
    $: revealedPaintingPath = `./img/${correctAnswer.id}.jpg`;

    // GUESS HANDLER LOGIC
    const guessHandler = (pickedGuess) => {
        if(pickedGuess === correctAnswer) {
            console.log('correctemundo!');
            score.update(n => n + 10);

        }
        else {
            console.log('uh oh. back to art school with you.');
            score.set(0);
        }

        if ($score > $highScore) { // if current score is higher than previous highscore, update highscore
                highScore.set($score);
            }
        paintingPromptPath = revealedPaintingPath;
    }

</script>

<div class="wrapper md:bg-neutral-600 md:flex md:justify-center md:w-screen md:px-[20%]">
    <div class="index flex flex-col items-center h-screen w-full">
        <div class="header h-[8%] sm:h-20 w-full flex items-center justify-between px-[10%] bg-black">
            <div class="">
                <h1 class="text-xl md:text-2xl font-bold leading-3 pt-2 text-yellow-300">PixelPalette</h1>
                <span class="text-xs text-neutral-500"><a href="https://studiofoyne.com" target=_blank>An art quiz by <span class="underline font-bold">Studio Foyne</span></a></span>
            </div>
            <Scoreboard/>
            
        </div>
        
    
        <div class="painting-prompt max-h-xl h-[35%] md:h-[47%] bg-[#F9FAFA] w-full p-[5%] justify-center flex ">
            {#if $revealState}
                <img src="{paintingPromptPath}" alt="{correctAnswer.title} by {correctAnswer.artistFirstName} {correctAnswer.artistLastName}" class="max-w-screen max-h-full md:h-full shadow-xl ">
            {:else}
                <img src="{paintingPromptPath}" alt="" class="max-w-screen shadow-xl max-h-full md:h-full ">
            {/if}
        </div>
        <hr class="w-full h-1 bg-neutral-400">
    
        <div class="answer-buttons h-[40%] md:h-[45%] w-screen sm:w-full bg-white flex flex-col justify-evenly items-center px-[10%] md:space-y-4 md:py-4">
            {#each scrambledAnswers as guessOption}
                <Guessbutton scrambledAnswer={guessOption} on:click={guessHandler(guessOption)}/>
            {/each}
    
            <div class="h-[10%] flex justify-center">
                {#if $revealState}
                    <button on:click={newPrompt} class="w-10 h-10 transition-colors duration-150 rounded-full focus:shadow-outline font-bold shadow-md hover:bg-yellow-200 border-black border-2">></button>
                {/if}
            </div>
        </div>
    
    </div>
</div>

<style></style>