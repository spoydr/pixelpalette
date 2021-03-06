import { writable } from 'svelte/store';

export let score = writable(0);
export let highScore = writable(0);

export function shuffle(arr = []) { // helper function that shuffles an array
        const array = arr;
        for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

export let activePrompt = writable({});
export let revealState = writable(false);
export let difficulty = writable('full');
