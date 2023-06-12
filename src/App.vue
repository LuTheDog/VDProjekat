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
          class="navbar-toggler w-100"
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
            <router-link class="nav-link" to="/"><L t="HOME" /></router-link>
            <div class="dropdown">
              <button
                class="btn bg-transparent dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
              >
                <L t="ARTWORKS" />
              </button>
              <ul class="dropdown-menu bg-transparent border-0">
                <li>
                  <router-link class="nav-link" to="/artworks"
                    >>&nbsp;<L t="ALLARTWORKS"
                  /></router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/artworks/paintings"
                    >>&nbsp;<L t="PAINTINGS"
                  /></router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/artworks/sculptures"
                    >>&nbsp;<L t="SCULPTURES"
                  /></router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/artworks/other"
                    >>&nbsp;<L t="OTHER"
                  /></router-link>
                </li>
              </ul>
            </div>
            <router-link class="nav-link" to="/about"
              ><L t="ABOUT"
            /></router-link>
            <router-link class="nav-link" to="/artists"
              ><L t="ARTISTS"
            /></router-link>
            <router-link class="nav-link" to="/profile"
              ><L t="PROFILE"
            /></router-link>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span v-if="lang == 'en'">🇺🇸</span>
                <span v-else>🇷🇸</span>
              </button>
              <ul
                class="dropdown-menu bg-transparent border-0"
                style="max-width: 50px"
              >
                <li>
                  <a
                    @click="changeLanguage('rs')"
                    class="dropdown-item bg-transparent"
                    href="#"
                  >
                    🇷🇸
                  </a>
                </li>
                <li>
                  <a
                    @click="changeLanguage('en')"
                    class="dropdown-item bg-transparent"
                    href="#"
                  >
                    🇺🇸
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="text-center big-thing">/{{ getBigThing() }}/</div>
    <div class="row" style="max-width: 100%">
      <div
        class="rounded-2 py-3 col-md-8 col-12 offset-md-2 h-auto"
        id="main-view"
      >
        <router-view />
      </div>
    </div>
    <div id="footer">
      Copyright 2023, Luka Lazic i Marko Radoicic, Odsek za softversko
      inzenjerstvo Elektrotehnickog fakulteta Univerziteta u Beogradu
    </div>
  </div>
</template>

<script>
import Data from "@/assets/data.js";
import L from "./components/Localization.vue";

export default {
  data() {
    return {
      artworks: Data.artworks,
      artists: Data.artists,
      lang: "en",
    };
  },
  created() {
    this.lang = JSON.parse(localStorage.getItem("language"));
  },
  components: {
    L,
  },
  methods: {
    changeLanguage(lang) {
      this.lang = lang;
      localStorage.setItem("language", JSON.stringify(lang));
      window.location.reload();
    },
    getBigThing() {
      let bt = this.$route.path.toUpperCase();
      if (bt == "/") bt = "/SIMPLICITY";
      bt = bt.slice(1);

      switch (bt) {
        case "/":
          bt = "/SIMPLICITY";
          break;
        case "ARTWORK":
          let aw = this.artworks.find(
            (awork) => awork.id == this.$route.query.id
          );
          bt += "S/" + aw.type.toUpperCase() + "S/" + aw.name.toUpperCase();
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
#footer {
  background: @navbar-color;
  padding-bottom: 20px;
  padding-top: 20px;
}
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
  max-width: 100%;
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
  color: #505050 !important;
}

button {
  font-size: x-large !important;
}

.big-thing {
  padding-bottom: 75px;
  font-size: 70px !important;
  color: black;
}

.dropdown:hover > .dropdown-menu {
  display: block;
}

.dropdown > .dropdown-toggle:active {
  /*Without this, clicking will make it sticky*/
  pointer-events: none;
}

.router-link-active {
  color: #000000 !important;
}
</style>
