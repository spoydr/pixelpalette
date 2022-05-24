<!-- A currently unimplemented difficulty toggle that allows the user to toggle 'easy mode', with more detailed paintings -->

<script> 
    import { difficulty } from "../stores";

    $: difficulty;

    let toggleValue;

    const toggleEasyMode = () => {
        if ($difficulty) {
            console.log('difficulty changed to hard')
            difficulty.set('full');
        }
        else {
            console.log('difficulty changed to easy')
            difficulty.set('25');
        }
    }
</script>

<div class="flex items-center justify-center w-full mb-12 py-6">
  
    <label on:click={toggleEasyMode} for="toggle" class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input type="checkbox" id="toggle" class="sr-only">
        <!-- line -->
        <div class="block bg-neutral-200 w-10 h-6 rounded-full"></div>
        <!-- dot -->
        <div class="dot absolute left-1 top-1 bg-neutral-100 w-4 h-4 rounded-full transition"></div>
      </div>
      <!-- label -->
      <div class="ml-2 text-neutral-300 font-medium leading-3 uppercase text-2xs">
        Easy<br>Mode
      </div>
    </label>
  
</div>