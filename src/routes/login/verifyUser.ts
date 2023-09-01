import { goto } from "$app/navigation";
import { userLoggedIn, authMessage } from "../../lib/components/stores/stores"; // get global user state

export async function verifyCredentials(email: string, password: string) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/users?email=${email}`);
    const userData = await response.json();

    if (userData.email === email && userData.password === password) {
      authMessage.set(null); // Clear any previous error messages
      userLoggedIn.set(userData); // Store user data in global store (this is not secure but it's just for demo authentication purposes)
      goto("/"); // Redirect to home page
    } else {
      authMessage.set("Invalid email or password.");
    }
  } catch (error) {
    authMessage.set("An error occurred. Please try again later.");
  }
}
