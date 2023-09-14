import { goto } from "$app/navigation";
import { authMessage, isLoggedIn } from "$lib/stores/stores"; // get global user state
import { PUBLIC_URI } from "$env/static/public";

export async function verifyCredentials(email: string, password: string) {
  await window
    .fetch(`${PUBLIC_URI}/users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.email === email && data.password === password) {
        authMessage.set(null); // Clear any previous error messages
        const { id, email, full_name, team_name, role_name } = data;
        isLoggedIn.set(true); // Set global user state
        window.sessionStorage.setItem(
          "userLoggedIn",
          JSON.stringify({ id, email, full_name, team_name, role_name })
        );
        authMessage.set("success");
        goto("/"); // Redirect to home page
      } else {
        authMessage.set("Invalid email or password.");
      }
    })
    .catch(() => {
      authMessage.set("An error occurred. Please try again later.");
    });
}
