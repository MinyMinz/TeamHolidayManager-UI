import { userIsLoggedIn, requestStatus } from "$lib/stores/stores"; // get global user state
import { PUBLIC_URI } from "../../config";

let statusMessage: string = "";

export async function verifyCredentials(email: string, password: string) {
  // Send user credentials to server for verification and set global userlogin state and session storage if valid

  await window
    .fetch(`${PUBLIC_URI}/auth/token`, {
      method: "POST",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "password",
        username: email,
        password: password,
        scope: "",
        client_id: "string",
        client_secret: "string"
      }),
    })
    .then((res) => {
      return res.json(); 
    })
    .then((data) => {
      if (data.access_token !== null) {
        // Clear any previous error messages and set status to success
        statusMessage = "success"; 
        requestStatus.set(statusMessage);
        // Set global userLogin state
        userIsLoggedIn.set(true); 
        // Set userLoggedIn in session storage
        window.sessionStorage.setItem("userLoggedIn", JSON.stringify(data.user_data));
        window.sessionStorage.setItem("userToken", data.access_token);
      } else {
        statusMessage = "Invalid email or password.";
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return statusMessage;
}
