import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-module-example",
    configKey: "example",
  },
  defaults: {
    addPlugin: true,
  },
  setup(options, nuxt) {
    if (options.addPlugin) {
      // Create resolver to resolve relative paths
      const { resolve } = createResolver(import.meta.url);

      addPlugin(resolve("./runtime/plugin"));
    }
  },
});
