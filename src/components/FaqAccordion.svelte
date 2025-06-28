<script>
  import { ChevronDownIcon } from '$lib/icons';
  import { faqs } from '$lib/data/faqs';
  let active = null;

  const toggle = (idx) => {
    active = active === idx ? null : idx;
  };
</script>

<div
  class="bg-gradient-to-br from-[#f1efff] via-[#fdfbff] to-[#f0efff] py-8 md:py-20 px-6"
>
  <div class="max-w-2xl mx-auto md:text-center">
    <p class="text-sm text-orange-500 font-medium md:font-bold mb-2">FAQ’s</p>
    <h2 class="text-3xl md:text-5xl font-light mb-8">
      We want to help you <br class="hidden sm:block" /> with all your doubts
    </h2>

    <!-- Accordion -->
    <div class="space-y-4 text-left">
      {#each faqs as item, idx}
        <div
          class="bg-white/80 backdrop-blur rounded-xl shadow p-4 transition-all duration-300"
        >
          <button
            class="w-full flex justify-between items-center font-medium text-left"
            on:click={() => toggle(idx)}
          >
            <span class={active === idx ? 'font-semibold' : ''}
              >{item.question}</span
            >
            <ChevronDownIcon
              class={`transition-transform duration-300 w-5 h-5 ${
                active === idx ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            class={`mt-2 text-gray-600 text-sm transition-all duration-300 overflow-hidden ${
              active === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p class="pt-2">{item.answer}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
