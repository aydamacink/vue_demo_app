<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <form id="demo" @submit.prevent="processForm">
    <!-- text -->
    <label>Name:</label> <input type="text" v-model="name" />
    <label>Price:</label> <input type="number" v-model="price" />
    <!-- checkbox -->
    <button>Submit</button>
  </form>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return { name: "", price: "", products: "" };
  },
  async mounted() {
    // const response = await fetch(
    //   "http://ec2-3-64-62-57.eu-central-1.compute.amazonaws.com:3000/products-list"
    // );
    // const data = await response.json();
    // console.log(data, "response");
    // this.products = data;
  },
  methods: {
    processForm: async function() {
      console.log({ name: this.name, product: this.product });
      // const response = await fetch(
      //   "http://ec2-3-64-62-57.eu-central-1.compute.amazonaws.com:3000/products",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({
      //       name: this.name,
      //       id: new Date(),
      //       price: parseFloat(this.price),
      //     }),
      //   }
      // );
      // console.log({ response });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
