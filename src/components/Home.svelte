<script>
  import Navbar from './Navbar.svelte';
  import Hero from './Hero.svelte';
  import PartnerForm from './PartnerForm.svelte';
  import ImageScroller from './ImageScroller.svelte';
  import bgImage from '$lib/assets/Bg.png'; 
</script>

<div
  class="min-h-screen text-white font-sans"
  style="
    background-image: url({bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  "
>
  <div>
    <Navbar />
    <div
      class="flex flex-col lg:flex-row items-center justify-between pt-7 pb-8 px-6 md:px-10 md:px-40 md:py-20 md:pb-36 gap-10"
    >
      <Hero />
      <PartnerForm />
    </div>
  </div>

  <ImageScroller />
</div>
