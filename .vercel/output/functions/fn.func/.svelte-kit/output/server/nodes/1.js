

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c7cd3121.js","_app/immutable/chunks/scheduler.fd84be43.js","_app/immutable/chunks/index.681d7507.js","_app/immutable/chunks/singletons.31831151.js"];
export const stylesheets = [];
export const fonts = [];
