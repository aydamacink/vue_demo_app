<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <form id="demo" @submit.prevent="processForm">
    <!-- text -->
    <label>Name:</label> <input type="text" v-model="name"  data-cy="input-name"/>
    <label>Price:</label> <input type="number" v-model="price" data-cy="input-price"/>
    <!-- checkbox -->
    <button data-cy="button-submit">Submit</button>
    <p v-if="success" data-cy="success-msg">Product created!</p>
  </form>
  <p>GraphQL Form </p>
  <form id="graph" @submit.prevent="processFormGraphql">
    <!-- text -->
    <label>Name:</label> <input type="text" v-model="name" />
    <label>Price:</label> <input type="number" v-model="price" />
    <!-- checkbox -->
    <button>Submit</button>
  </form>
  <ul id="example-1">
  <li v-for="product in products" :key="product.id">
    {{ product.id}} | {{product.name}}
  </li>
</ul>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: "App",
  data() {
    return { name: "", price: "", products: [] , productsList: [], success: false,  };
  },
  async mounted() {
    const response = await fetch(
      "http://ec2-3-64-62-57.eu-central-1.compute.amazonaws.com:3000/products-list"
    );
    const data = await response.json();
    console.log(data, "response");
    this.products = data;
    this.success = true; 
  },
  apollo : {
    productsList: gql`
    query {
      productList {
      id
      name
    }
  }
    `
  },
  methods: {
    processForm: async function() {
      console.log({ name: this.name, price: this.price });
      const response = await fetch(
        "http://ec2-3-64-62-57.eu-central-1.compute.amazonaws.com:3000/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: this.name,
            id: new Date(),
            price: parseFloat(this.price),
          }),
        }
      );
      console.log({ response });
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
