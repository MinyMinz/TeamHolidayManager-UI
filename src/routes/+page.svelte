<script lang="ts">
	let email = new String();
	let password = new String();
	let message = new String();

	async function handleSubmit() {
		try {
			const response = await fetch(`http://127.0.0.1:8000/users/email/${email}`);
			const userData = await response.json();

			if (userData.email === email && userData.password === password) {
				message = 'Log in sucessful'; // Reset error message
				// Do something (e.g., navigate to another page, show a success message)
			} else {
				message = 'Invalid email or password.';
			}
		} catch (error) {
			message = 'An error occurred. Please try again later.';
		}
	}
</script>

<main>
	<div class = "mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<h1 class = "text-4xl text-center p-10 underline">Welcome to PSL Team Calendar</h1>
		{#if message}<p class="error">{message}</p>{/if}
		<form on:submit|preventDefault={handleSubmit}>
			<label>
				Email:
				<input type="email" bind:value={email} required />
			</label>
			<label>
				Password:
				<input type="password" bind:value={password} required />
			</label>
			<button type="submit">Login</button>
		</form>
	</div>
</main>
