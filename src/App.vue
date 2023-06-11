<template>
  <div id="body">
    <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="pt-3 rounded-2" id="main-view">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
@navbar-color: #b07ed9;
@text-color: #474747;
@background-color: #f0f0f0;
@background-content: #f7f7f7;
#navbar {
  background: @navbar-color;
}
#body {
  background: @background-color;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main-view {
  background: @background-content;
  max-width: 66%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: @text-color;
}
</style>
