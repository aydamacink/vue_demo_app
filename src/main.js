import { createApp, h } from "vue";
import App from "./App.vue";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import VueApollo from '@vue/apollo-option'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

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

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:3000/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client // function we can query easily . HOC
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

const app = createApp({
  el: "#app",
  // inject apolloProvider here like vue-router or vuex
  apolloProvider,
  render: () => h(App),
});
// app.use(VueApollo);
app.mount("#app");
