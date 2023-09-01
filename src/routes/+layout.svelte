<script>
  import Nav from "$lib/components/navbar/nav.svelte";
  import "../app.css";

  let dark = true;

</script>

<div class:dark>
  <main class="bg-gray-200 dark:bg-gray-800">
    <Nav bind:dark />
    <slot />
  </main>
</div>
