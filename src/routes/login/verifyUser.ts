import { isLoggedIn, requestStatus } from "$lib/stores/stores"; // get global user state
import { PUBLIC_URI } from "$env/static/public";

let statusMessage: string = "";

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
        statusMessage = "success"; // Clear any previous error messages
        requestStatus.set(statusMessage);
        const { id, email, full_name, team_name, role_name } = data;
        isLoggedIn.set(true); // Set global user state
        window.sessionStorage.setItem(
          "userLoggedIn",
          JSON.stringify({ id, email, full_name, team_name, role_name })
        );
      } else {
        statusMessage = "Invalid email or password.";
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return statusMessage;
}
