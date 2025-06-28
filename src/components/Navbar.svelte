<script>
  import CustomButton from '../lib/CustomButton.svelte';
  import Logo from '$lib/assets/Logo.png?url';
  import { MoonIcon } from '$lib/icons';
</script>

<nav
  class="relative flex justify-between items-center py-5 px-4 md:px-8 md:py-4 text-sm"
>
  <!-- Logo -->
  <img
    src={Logo}
    alt="Logo"
    class="w-[90.17px] h-[14px] md:w-[128.81px] md:h-[20px]"
  />

  <!-- Desktop Menu -->
  <ul class="hidden lg:flex gap-10 font-satoshi text-sm">
    {#each ['Platform', 'Solutions', 'Developers', 'Resources', 'Pricing'] as item}
      <li class="hover:text-purple-400 transition duration-300 cursor-pointer">
        {item}
      </li>
    {/each}
  </ul>

  <!-- Desktop Buttons -->
  <div class="hidden md:flex items-center gap-4">
    <button class="font-satoshi text-sm transition duration-300">
      Log in
    </button>
    <CustomButton text="Schedule a demo" />
  </div>

  <!-- Mobile: Login + Moon Icon -->
  <div class="md:hidden absolute right-6 top-2 flex items-center gap-8">
    <button class="hover:text-purple-400 transition duration-300">
      Log in
    </button>
    <div
      class="flex items-center justify-center w-10 h-10 border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl"
    >
      <MoonIcon
        class="w-5 h-5 text-white cursor-pointer hover:text-purple-400 transition"
      />
    </div>
  </div>
</nav>
