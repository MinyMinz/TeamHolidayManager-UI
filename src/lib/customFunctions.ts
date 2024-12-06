// Global function used to get the user from the session storage
export function getUserFromSessionStorage() {
  const loggedInUser: any = {};
  if (typeof sessionStorage !== "undefined") {
    const userLoggedIn = sessionStorage.getItem("userLoggedIn");
    if (userLoggedIn !== null) {
      for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
        loggedInUser[key] = value;
      }
      return loggedInUser;
    }
  }
}

// Global function used to get the token from the session storage
export function getUserTokenFromSessionStorage() {
  if (typeof sessionStorage !== "undefined") {
    return sessionStorage.getItem("userToken");
  }
  return null; // Add a return statement for cases where sessionStorage is undefined
}
