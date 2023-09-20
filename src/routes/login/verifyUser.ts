import { isLoggedIn, requestStatus } from "$lib/stores/stores"; // get global user state
import { PUBLIC_URI } from "$env/static/public";

let statusMessage: string = "";

export async function verifyCredentials(email: string, password: string) {
  // Send user credentials to server for verification and set global userlogin state and session storage if valid
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
        // Clear any previous error messages and set status to success
        statusMessage = "success"; 
        requestStatus.set(statusMessage);
        const { id, email, full_name, team_name, role_name } = data;
        // Set global userLogin state
        isLoggedIn.set(true); 
        // Set userLoggedIn in session storage
        window.sessionStorage.setItem(
          "userLoggedIn",
          JSON.stringify({ id, email, full_name, team_name, role_name })
        );
      } else {
        statusMessage = "Invalid email or password.";
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return statusMessage;
}
