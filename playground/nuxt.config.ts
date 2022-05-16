import { defineNuxtConfig } from "nuxt";
import NuxtModuleBoilerplate from "../packages/nuxt-module-boilerplate/dist/types";

export default defineNuxtConfig({
  modules: [NuxtModuleBoilerplate],
  boilerplate: {},
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        forceConsistentCasingInFileNames: true,
      },
    },
  },
});
