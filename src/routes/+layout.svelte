<script>
    import Nav from '$lib/components/navbar/Nav.svelte';
	import '../app.css';
	let dark = true;
</script>

<!-- <div class:dark>
	<main class="bg-gray-50 dark:bg-gray-800">
		<div class="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1 class="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">PSL Team Calendar</h1>
				<p class="mt-5 max-w-md mx-auto text-xl text-gray-500 dark:text-gray-400 sm:text-2xl">Welcome to the PSL Team Calendar</p>
			</div>
		</div>
</div> -->

<Nav />

<slot />
