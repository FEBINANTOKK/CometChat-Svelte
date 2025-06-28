<script>
  import CustomButton from '$lib/CustomButton.svelte';

  import { MailIcon } from '$lib/icons';
</script>

<div
  class="border border-white/20 bg-white/5 backdrop-blur-md p-6 py-8 rounded-3xl shadow-xl w-full max-w-[510px] animate-slide-in"
>
  <h2 class="text-3xl font-semibold mb-6">Become a partner</h2>

  <form class="flex flex-col gap-5">
    <!-- Full Name -->
    <div class="flex flex-col gap-2">
      <label for="fullname" class="text-white text-sm">Full name</label>
      <input
        id="fullname"
        type="text"
        placeholder="Type your name here..."
        class="bg-white/5 placeholder-gray-400 text-white px-4 py-1 rounded-lg outline-none border border-white/20 focus:border-purple-400"
      />
    </div>

   
    <!-- Email -->
    <div class="flex flex-col gap-2">
      <label for="email" class="text-white text-sm">Email address</label>
      <div class="relative flex items-center">
        <MailIcon
          class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        />

        <input
          id="email"
          type="email"
          placeholder="Type your email..."
          class="pl-10 bg-white/5 placeholder-gray-400 text-white px-4 py-1 rounded-lg w-full outline-none border border-white/20 focus:border-purple-400"
        />
      </div>
    </div>

    <!-- Company -->
    <div class="flex flex-col gap-2">
      <label for="company" class="text-white text-sm">Company name</label>
      <input
        id="company"
        type="text"
        placeholder="Type your company’s name"
        class="bg-white/5 placeholder-gray-400 text-white px-4 py-1 rounded-lg outline-none border border-white/20 focus:border-purple-400"
      />
    </div>

    <!-- Submit Button -->
    <div class="w-64">
      <CustomButton text="Submit application" class="w-1/2" />
    </div>
  </form>
</div>
