<script>
  import { userLoggedIn } from "../stores/stores";
  import Loginlogoutbutton from "./loginlogoutbutton.svelte";

  export let dark = true;

</script>

<nav class="bg-gray-400 dark:bg-slate-900 px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
  <div class="flex items-center justify-between">
    <a
      class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-blue-400"
      href="/">Phoebus Software</a>
  </div>

  <div
    class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
  >
    {#if $userLoggedIn}
      <a class="text-gray-800 dark:text-white hover:text-blue-400" href="/holidayRequest"
		>
		HolidayRequests</a>
      <a class="text-gray-800 dark:text-white hover:text-blue-400" href="/calendar"
		>
		Calendar</a>
      <a class="text-gray-800 dark:text-white hover:text-blue-400" href="/user"
	  	>
	  	Users</a>
    {/if}
  </div>
  <div class="flex-0  text-gray-800 dark:text-white">
    <button class = "mx-5"
      on:click|preventDefault={() => {
        dark = !dark;
      }}
      >{dark ? "Dark" : "Light"}
    </button>
    <Loginlogoutbutton />
  </div>
</nav>
