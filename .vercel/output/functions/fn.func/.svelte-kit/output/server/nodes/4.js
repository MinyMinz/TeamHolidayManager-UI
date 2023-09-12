

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.a2af1bec.js","_app/immutable/chunks/scheduler.fd84be43.js","_app/immutable/chunks/index.681d7507.js","_app/immutable/chunks/navigation.bb76d6ea.js","_app/immutable/chunks/singletons.d695487f.js","_app/immutable/chunks/public.7ee89064.js"];
export const stylesheets = [];
export const fonts = [];
