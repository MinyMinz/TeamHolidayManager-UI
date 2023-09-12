import { c as create_ssr_component, a as subscribe, f as add_attribute, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { a as authMessage, I as Icon } from "../../../chunks/Icon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authMessage, $$unsubscribe_authMessage;
  $$unsubscribe_authMessage = subscribe(authMessage, (value) => $authMessage = value);
  let email = "";
  let password = "";
  $$unsubscribe_authMessage();
  return `<main class="page"><div class="login-container"><div class="login-form-container"><h1 class="login-title" data-svelte-h="svelte-8h4tgn">Sign in</h1> ${$authMessage ? `<p class="error">${escape($authMessage)}</p>` : ``} <form class="login-form"><div class="mb-4 w-full"><label>Email:
            <input class="form-input" type="email" required${add_attribute("value", email, 0)}></label></div> <div class="w-full"><label>Password:
            ${`<input class="form-input" type="password" required${add_attribute("value", password, 0)}>`} <button type="button" class="ml-1 absolute top-50 h-10">${`${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      style: "font-size: 18px",
      icon: "mdi:eye-off"
    },
    {},
    {}
  )} `}</button></label></div> <button type="button" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full mt-6 mb-1" data-svelte-h="svelte-12isot5">Sign in</button></form></div></div></main>`;
});
export {
  Page as default
};
