import { goto } from "$app/navigation";
import { authMessage, isLoggedIn } from "$lib/components/stores/stores"; // get global user state
import { PUBLIC_URI } from '$env/static/public'

export async function verifyCredentials(email: string, password: string) {
  try {
    const response = await window.fetch(`${PUBLIC_URI}/users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });
    const userResponse = await response.json();

    if (userResponse.email === email && userResponse.password === password) {
      authMessage.set(null); // Clear any previous error messages
      const { id, email, full_name, team_name, role_name } = userResponse;
      isLoggedIn.set(true); // Set global user state
      window.sessionStorage.setItem(
        "userLoggedIn",
        JSON.stringify({ id, email, full_name, team_name, role_name })
      );
      goto("/"); // Redirect to home page
    } else {
      authMessage.set("Invalid email or password.");
    }
  } catch (error) {
    authMessage.set("An error occurred. Please try again later.");
  }
}
