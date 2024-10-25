<template>
    <div id="app">
      <header>
        <h1>{{ title }}</h1>
        <nav>
          <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/about">À propos</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </header>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        title: 'Centre Sportif de Vaise'
      };
    },
  };
  </script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin: 10px;
  }
  
  router-link {
    text-decoration: none;
    color: #42b983;
  }
  </style>
  