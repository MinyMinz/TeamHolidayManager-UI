import { c as create_ssr_component, a as subscribe, v as validate_component, b as set_store_value, d as add_classes } from "../../chunks/ssr.js";
import { i as isLoggedIn, I as Icon } from "../../chunks/Icon.js";
const Loginlogoutbutton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_isLoggedIn();
  return `${$isLoggedIn ? `<button class="loginButton" data-svelte-h="svelte-1ppdw9a">Logout</button>` : `<button class="loginButton" data-svelte-h="svelte-hgbz4r">Login</button>`}`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  let { dark = true } = $$props;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  $$unsubscribe_isLoggedIn();
  return `<nav class="bg-gray-400 dark:bg-slate-900 h-12 md:flex md:justify-between md:items-center sticky top-0 z-50"><div class="flex items-center justify-between" data-svelte-h="svelte-1fss4gp"><a class="ml-1 text-xl font-bold text-gray-800 hover:text-blue-500 dark:text-white md:text-2xl dark:hover:text-blue-300" href="/">Phoebus Software</a></div> <div class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-8 md:mt-0">${$isLoggedIn ? `<a class="text-gray-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-300" href="/holidayRequest" data-svelte-h="svelte-b044jq">HolidayRequests</a> <a class="text-gray-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-300" href="/user" data-svelte-h="svelte-fkut7g">User Management</a>` : ``}</div> <div class="flex text-gray-800 dark:text-white"><button class="mx-2 float-left">${dark ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      inline: true,
      icon: "line-md:sunny-outline-to-moon-loop-transition",
      style: "width: 30px; height: 30px;"
    },
    {},
    {}
  )}` : ``} ${!dark ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      inline: true,
      icon: "line-md:moon-to-sunny-outline-loop-transition",
      style: "width: 30px; height: 30px"
    },
    {},
    {}
  )}` : ``}</button> ${validate_component(Loginlogoutbutton, "Loginlogoutbutton").$$render($$result, {}, {}, {})}</div></nav>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  let loggedIn = false;
  if (typeof sessionStorage !== "undefined") {
    if (sessionStorage.getItem("userLoggedIn") !== null) {
      loggedIn = true;
    }
  }
  set_store_value(isLoggedIn, $isLoggedIn = loggedIn, $isLoggedIn);
  let dark = true;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div${add_classes((dark ? "dark" : "").trim())}> <main class="defaultPage">${validate_component(Nav, "Nav").$$render(
      $$result,
      { dark },
      {
        dark: ($$value) => {
          dark = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${slots.default ? slots.default({}) : ``}</main></div>`;
  } while (!$$settled);
  $$unsubscribe_isLoggedIn();
  return $$rendered;
});
export {
  Layout as default
};
