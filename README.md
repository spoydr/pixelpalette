# PixelPalette

👨🏽‍🎨 You can play PixelPalette [here](https://pixelpalette.netlify.app/).
You can also read more about this project [on my website](https://studiofoyne.com/portfolio/).

This little art minigame was the result of me learning [Svelte](https://svelte.dev/) and wanting to put this framework's strengths to the test. For styling, I used [TailwindCSS](https://tailwindcss.com/).

The concept for this game is simple - the difficulty of actually playing it, however, is quite high (apparently even for art students, so we've heard...)

The player has to guess which famous painting is hidden behind a highly pixelated version of said painting. Solid knowledge of these painters' colour usage and recognizing rough compositions will help to guess the correct answer out of three options.

Bear in mind that these have been my first steps into the world of Svelte, and my JavaScript isn't exactly expert-level either. I'm very much open to constructive criticism!

## The dataset

The current list of paintings consists of a hundred works of art, curated by yours truly. That's right, you'll have to guess from a collection of paintings that I happen to appreciate. I've excluded art that could possibly be copyrighted still.

The image files come from multiple sources, but the most common one has been [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page).

I resized and pixelated the 100 image files using tools provided by https://pinetools.com/.

## Future features

The purpose of this project was mostly to explore the possibilities of working with the Svelte framework, so I wouldn't expect any updates for the foreseeable future.

However, we did think of some fun additional features that could be implemented whenever we decide to revisit this project:

- Difficulty modes: An 'easy mode' toggle that gives more detailed versions of pixelated paintings.
- Hints: When stuck on a hard painting, the user can ask for a hint about the artist (e.g. 'This painter never sold a single work during his lifetime!')
- 'Lifelines' (like in Who Wants to be a Millionaire?). For each attempt, the player gets a few lifelines to use when stuck on a particularly hard painting.
- Adding more datasets of paintings from a specific style or period.

This project has been a lot of fun to work on, and the combination of Svelte + TailwindCSS feels like an absolute powerhouse.

I'm open to any feedback, don't hesitate to get in touch!
