<script>
    import {paintingsData} from '../data.js';

    console.log(paintingsData.length);

    let paintingsLength = paintingsData.length;
    let randomNumber = Math.floor(Math.random() * paintingsLength);
    let paintingPrompt = paintingsData[randomNumber];

    let shuffledPaintings = paintingsData.sort(() => 0.5 - Math.random());
    let chosenPainting = shuffledPaintings[0];

    console.log('de gekozen bitch is' + chosenPainting.title);

    let paintingPromptPath = `./img/pixelated_full/${chosenPainting.id}.jpeg`
</script>

<div class="index flex flex-col items-center justify-center space-y-4 h-screen">
    <h1 class="text-5xl font-bold">PixelPalette 0.1</h1>

    <div class="painting-prompt h-1/2">
        <img src="{paintingPromptPath}" alt="{paintingPromptPath}" class="h-full">
    </div>

    <div class="answer-picker flex flex-col space-y-4">
        <button class="border-2 border-black px-4 py-2 hover:bg-teal-200">optie 1</button>
        <button class="border-2 border-black px-4 py-2 hover:bg-teal-200">optie 2</button>
        <button class="border-2 border-black px-4 py-2 hover:bg-teal-200">optie 3</button>
        <button class="border-2 border-black px-4 py-2 hover:bg-teal-200">optie 4</button>
    </div>
</div>

<style></style>