<script>
 import { GithubIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon, } from '$lib/icons';
</script>

<div class="bg-[#0A0914] text-white px-6 md:px-28 py-6 text-sm footer">
  <!-- Desktop View -->
  <div
    class="hidden md:flex items-center xl:justify-between flex-wrap text-gray-300"
  >
    <div class="flex gap-6 pb-2">
      <span>2023 © CometChat</span>
      <a href="#footer" class="hover:text-white">Terms of Use</a>
      <a href="#footer" class="hover:text-white">Privacy Policy</a>
    </div>

    <div class="flex gap-6 items-center pb-2">
      <div class="flex items-center gap-1">
        <FacebookIcon class="w-4 h-4" />
        <span>Facebook</span>
      </div>
      <div class="flex items-center gap-1">
        <LinkedinIcon class="w-4 h-4" />
        <span>LinkedIn</span>
      </div>
      <div class="flex items-center gap-1">
        <InstagramIcon class="w-4 h-4" />
        <span>Instagram</span>
      </div>
      <div class="flex items-center gap-1">
        <TwitterIcon class="w-4 h-4" />
        <span>Twitter</span>
      </div>
      <div class="flex items-center gap-1">
        <GithubIcon class="w-4 h-4" />
        <span>GitHub</span>
      </div>
    </div>
  </div>

  <!-- Mobile View -->
  <!-- Mobile View -->
  <div class="md:hidden flex flex-col gap-4 text-gray-300">
    <div
      class="flex flex-col gap-4 w-full text-[15px] sm:text-[14px] min-[360px]:text-[13px] min-[340px]:text-[12px] min-[320px]:text-[11px]"
    >
      <!-- Row 1 -->
      <div class="flex items-center whitespace-nowrap overflow-x-auto gap-10">
        <div class="flex items-center gap-1 shrink-0">
          <FacebookIcon class="w-4 h-4" />
          <span>Facebook</span>
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <LinkedinIcon class="w-4 h-4" />
          <span>LinkedIn</span>
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <InstagramIcon class="w-4 h-4" />
          <span>Instagram</span>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="flex items-center whitespace-nowrap overflow-x-auto gap-10">
        <div class="flex items-center gap-1 shrink-0">
          <TwitterIcon class="w-4 h-4" />
          <span>Twitter</span>
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <GithubIcon class="w-4 h-4" />
          <span>GitHub</span>
        </div>
      </div>

      <!-- Row 3 -->
      <div class="flex items-center whitespace-nowrap overflow-x-auto gap-10">
        <span class="shrink-0">2023 © CometChat</span>
        <a href="#footer" class="hover:text-white shrink-0">Terms of Use</a>
        <a href="#footer" class="hover:text-white shrink-0">Privacy Policy</a>
      </div>
    </div>
  </div>
</div>
