<script>
    import { partnerships } from '$lib/data/PartnershipPrograms.js';
</script>

<div class="bg-[#FAFAFF] px-6 py-14 text-black">
  <div class="max-w-full pt-5 pr-5 pl-5 xl:p-16">
    <!-- Header -->
    <div class="mb-20">
      <p class="text-mydark text-sm font-medium mb-2">Our programs</p>
      <h2
        class="text-3xl md:text-4xl font-semibold leading-tight max-w-xl border-l-4 border-dashed border-purple-600 pl-4"
      >
        Types of partnerships programs
      </h2>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
      {#each partnerships as item, idx}
        <div
          class="flex flex-col items-stretch gap-4 animate-fade-in-up"
          style="animation-delay: {idx * 0.1}s"
        >
          <img src={item.icon} alt={item.title} class="h-8 w-8" />
          <h3 class="font-semibold text-lg">{item.title}</h3>
          <p class="text-sm text-gray-700">{item.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
