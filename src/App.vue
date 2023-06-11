<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap"
    rel="stylesheet"
  />
  <div id="body">
    <nav class="navbar navbar-expand-lg padded">
      <div class="container-fluid">
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
          <div class="navbar-nav mx-auto justify-content-between w-100">
            <div></div>
            <router-link class="nav-link" to="/">HOME</router-link>
            <router-link class="nav-link" to="/about">ABOUT</router-link>
            <router-link class="nav-link" to="/artworks">ARTWORKS</router-link>
            <router-link class="nav-link" to="/artists">ARTISTS</router-link>
            <router-link class="nav-link" to="/profile">MY PROFILE</router-link>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
    <div class="text-center big-thing">{{ getBigThing() }}/</div>
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

<script>
import Data from "@/assets/data.js";

export default {
  data() {
    return {
      artworks: Data.artworks,
      artists: Data.artists,
    };
  },
  methods: {
    getBigThing() {
      let bt = this.$route.path.toUpperCase();
      console.log(this.$route.path);
      if (bt == "/") bt = "/SIMPLICITY";
      switch (bt) {
        case "/":
          bt = "/SIMPLICITY";
          break;
        case "/ARTWORK":
          let artworkName = this.artworks
            .find((awork) => (awork.id = this.$route.query.id))
            .name.toUpperCase();
          bt = "/" + artworkName;
          break;
      }
      return bt;
    },
  },
};
</script>

<style lang="less">
@navbar-color: #dbafff;
@text-color: #474747;
@background-color: #ffffff;
@background-content: #e9e9e9;
#navbar {
  background: @navbar-color;
  padding: 60px !important;
}
.padded {
  padding: 68px !important;
}
#body {
  height: 530px;
  background-color: @navbar-color;
  font-family: "Raleway", sans-serif;
}
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#main-view {
  background: @background-content;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 15px;
}

.nav-link {
  font-size: x-large !important;
}

.big-thing {
  padding-bottom: 75px;
  font-size: 70px !important;
  color: black;
}
</style>
