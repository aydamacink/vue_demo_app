import { createApp } from "vue";
import App from "./App.vue";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn:
    "https://ad6312438f9444198af9275276c99e86@o545631.ingest.sentry.io/5667905",
  integrations: [new Integrations.BrowserTracing()],
  tracingOptions: {
    trackComponents: true,
  },

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

createApp(App).mount("#app");
