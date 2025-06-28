<!-- src/components/Footer.svelte -->
<script>
   import { footerData, sections } from '$lib/data/footerData';
     import Logo from '$lib/assets/Logo.png?url';
  let openIndex = null;

  const toggleSection = (index) => {
    openIndex = openIndex === index ? null : index;
  };

 
</script>

<footer class="bg-[#0B0B1F] text-gray-300 px-6 xl:px-28 pt-14 md:py-12">
    <img
    src={Logo}
    alt="Logo"
    class="pb-7 "
  />
  <div
    class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  >
    {#each sections as section, i}
      <div class="mb-1 md:mb-0">
        <button
          class="w-full flex justify-between items-center font-semibold md:cursor-default md:pointer-events-none md:mb-3 text-[#6852D6] "
          on:click={() => toggleSection(i)}
        >
          <span>{section.title}</span>
          <span class="md:hidden">{openIndex === i ? '−' : '+'}</span>
        </button>
        <div
          class={`space-y-1 text-sm text-gray-300 transition-all duration-300 ease-in-out ${openIndex !== i ? 'hidden md:block' : 'block'}`}
        >
          {#each section.content as group}
            {#if group.heading}
              <h5 class="mt-5 mb-2 font-medium text-gray-400">
                {group.heading}
              </h5>
            {/if}
            {#each group.items as item}
              <div class="text-[#FAFAFF]">{item}</div>
            {/each}
          {/each}
        </div>
      </div>
    {/each}

    <!-- Last column with Resources, Competitors, Company -->
    <div class="space-y-6">
      {#each ['Resources', 'Competitors', 'Company'] as key, idx}
        <div class="mb-9 md:mb-0">
          <button
            class="w-full flex justify-between items-center text-[#6852D6] mb-2  font-semibold  md:cursor-default md:pointer-events-none md:mb-3"
            on:click={() => toggleSection(sections.length + idx)}
          >
            <span>{key}</span>
            <span class="md:hidden"
              >{openIndex === sections.length + idx ? '−' : '+'}</span
            >
          </button>
          <div
            class={`space-y-1 text-sm text-gray-300 md:mb-6 transition-all duration-300 ease-in-out ${openIndex !== sections.length + idx ? 'hidden md:block' : 'block'}`}
          >
            {#each footerData[key] as item}
              <div class="text-[#FAFAFF]">{item}</div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</footer>

<style>
  /* Optional: Add Tailwind-like utility classes if you're not using Tailwind directly */
</style>
