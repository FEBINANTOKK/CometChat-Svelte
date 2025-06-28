<script>

  import { benefits } from '$lib/data/PartnerBenefits';
 
</script>

<section>
  <section class="relative overflow-hidden bg-[#0E0C20] text-white">
    <div
      class="w-[390px] h-[183px] mt-10 xl:w-[1440px] xl:h-[301px] xl:mt-24 flex flex-col gap-2.5 xl:items-start pt-12 pr-5 pb-10 pl-5 xl:p-16 bg-[#0E0C20] text-white rounded-lg"
    >
      <!-- For large screens -->
      <p
        class="mb-1 text-sm font-semibold uppercase tracking-wide text-orange-400 hidden sm:block"
      >
        Be a partner
      </p>
      <h2
        class="text-3xl  font-medium leading-tight sm:text-4xl md:text-5xl lg:text-6xl hidden sm:block"
      >
        CometChat&nbsp;partner<br class="hidden font-medium  sm:inline" />advantages
      </h2>

      <!-- For mobile screens -->
      <p
        class="mb-1 text-sm font-semibold uppercase tracking-wide text-orange-400 sm:hidden"
      >
        The benefits
      </p>
      <h2 class="text-[32px] font-semibold leading-snug sm:hidden">
        Moderation to help your community thrive
      </h2>
    </div>
  </section>

  <div
    class="bg-[#0E0C20] px-6 py-16 text-white pt-12 pr-5 pb-10 pl-5 xl:pt-16 xl:pr-16 xl:pb-16 xl:pl-16"
  >
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20"
    >
      {#each benefits as item, idx}
        <div
          class="flex items-start gap-4 animate-fade-in-up"
          style={`animation-delay: ${idx * 0.1}s;`}
        >
          <img src={item.icon} alt={item.title} class="h-8 w-8 mt-1" />
          <div>
            <h3 class="font-semibold text-base">{item.title}</h3>
            <p class="text-sm text-gray-400">{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
