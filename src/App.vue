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
    <div class="row">
      <div
        class="rounded-2 py-3 col-md-8 col-12 offset-md-2 h-auto"
        id="main-view"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="less">
@navbar-color: #be6eff;
@text-color: #474747;
@background-color: #fffca8;
@background-content: #f7f7f7;
#navbar {
  background: @navbar-color;
}
#body {
  height: calc(50vh);
  background-color: @navbar-color;
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
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 15px;
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
