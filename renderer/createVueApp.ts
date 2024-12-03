export { createVueApp };

import { createSSRApp, h, shallowRef } from "vue";
import { setPageContext } from "./usePageContext";
import { setData } from "./useData";
import Layout from "./Layout.vue";
import type { PageContext } from "vike/types";
import { objectAssign } from "./utils";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

function createVueApp(pageContext: PageContext) {
  const pageContextRef = shallowRef(pageContext);
  const dataRef = shallowRef(pageContext.data);
  const pageRef = shallowRef(pageContext.Page);

  const RootComponent = () => h(Layout, null, () => h(pageRef.value));
  const app = createSSRApp(RootComponent);
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });

  // app.changePage() is called upon navigation, see +onRenderClient.ts
  objectAssign(app, {
    changePage: (pageContext: PageContext) => {
      pageContextRef.value = pageContext;
      dataRef.value = pageContext.data;
      pageRef.value = pageContext.Page;
    },
  });

  return app;
}
