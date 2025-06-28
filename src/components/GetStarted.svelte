<script>
  import bgImg from '$lib/assets/Fotter-BG.png';
  import CustomButton from '$lib/CustomButton.svelte';
</script>

<div
  class="w-full bg-cover bg-center bg-no-repeat min-h-full py-16 md:py-24 px-6 text-white md:text-center animate-fade-in"
  style="background-image: url('{bgImg}');"
>
  <h2 class="text-3xl md:text-5xl font-medium mb-4">Get started for free</h2>
  <p class="text-base md:text-lg text-gray-300 mb-6">
    Build and test for as long as you need. <br class="hidden md:block" />
    Pick a plan when you're ready.
  </p>
<div class="flex flex-row justify-center items-center gap-2 flex-wrap sm:flex-nowrap">
  <button
    class="bg-black hover:bg-gray-900 border border-gray-700 text-white px-4 py-2 text-sm rounded-lg transition duration-300"
  >
    Start free trial
  </button>

  <CustomButton class="px-4 py-2 text-sm rounded-lg" text="Schedule a demo" />
</div>

  
</div>
