

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.26e7a62f.js","_app/immutable/chunks/scheduler.fd84be43.js","_app/immutable/chunks/index.681d7507.js","_app/immutable/chunks/navigation.7f03ff5f.js","_app/immutable/chunks/singletons.31831151.js","_app/immutable/chunks/public.7ee89064.js"];
export const stylesheets = [];
export const fonts = [];
