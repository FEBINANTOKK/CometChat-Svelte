<script>
 import { companyPartnerImages } from '$lib/data/CompanyPartners.js';
  const scrollerImages = [...companyPartnerImages, ...companyPartnerImages, ...companyPartnerImages, ...companyPartnerImages];
</script>

<div class="relative overflow-hidden bg-mydark py-8">
  <div class="flex w-max animate-marquee gap-6">
    {#each scrollerImages as src, idx}
      <img
        {src}
        alt={`Scroll ${idx}`}
        class="h-5 object-cover rounded-xl shrink-0"
      />
    {/each}
  </div>
</div>
