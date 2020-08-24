<template>
  <div id="app">
    <nav>  
      <router-link v-bind:to="{name: 'Home'}">Home</router-link>
      <router-link v-bind:to="{name: 'Form'}">Form</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app'
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap');

body {
    background-color: #fce300;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 400;
    width: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 2rem;
  color: #e7360c;
  margin: 0px;
  padding: 0px;
}

nav {
  background-color: black;
  margin: 0px;
  border: 3px solid #e7360c;
  padding: 10px;

  display: flex;
  justify-content: space-evenly;
}

a {
  color: white;
}

h1 {
    color: #e7360c;
    font-size: 5em;
    margin: 0px;
    font-weight: 500;
}

h2 {
    color: #e7360c;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 500;
    text-decoration: underline;
}

h3 {
    font-weight: 500;
    text-decoration: overline;
    font-size: 2rem;
    margin: 0px;
}

img {
  margin: 15px;
}

</style>

