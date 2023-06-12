<template>
  <div class="container">
    <div class="row search-bar">
      <div class="input-group mb-3">
        <input
          id="search"
          type="text"
          class="form-control"
          @keyup="activeFilter()"
        />
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <L t="SORT" />
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li>
            <a class="dropdown-item" href="#" @click="sortBy(1)"
              ><L t="SORT BY NAME"
            /></a>
          </li>
          <li>
            <a class="dropdown-item" href="#" @click="sortBy(2)"
              ><L t="SORT BY ARTIST"
            /></a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <div
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3 masonry-row"
      data-masonry='{"percentPosition": true,  "itemSelector": ".col" }'
    >
      <ArtworkCard
        v-for="a of getArtworks()"
        :key="a.id"
        :artwork="a"
        :artist="getArtist(a)"
      />
    </div>
  </div>
</template>

<script>
import Masonry from "masonry-layout";
import $ from "jquery";
import data from "../assets/data.js";
import ArtworkCard from "@/components/ArtworkCard.vue";
import L from "@/components/Localization.vue";

export default {
  mounted: function () {
    let $grid = document.querySelector(".masonry-row");
    let msnry = new Masonry($grid, {
      itemSelector: ".col",
      percentPosition: true,
    });

    let $images = $grid.querySelectorAll(".card img");
    $images.forEach(function (el) {
      el.addEventListener("load", function () {
        console.log("Image is loaded: " + el.getAttribute("src"));
        msnry.layout();
      });
    });
  },
  name: "Artworks",
  components: {
    ArtworkCard,
    L,
  },
  data() {
    return {
      artists: data.artists,
      artworks: data.artworks,
      criteria: 0,
    };
  },
  methods: {
    getArtworks() {
      if (this.$route.path == "/artworks") {
        return this.artworks;
      }
      return this.artworks.filter((a) =>
        this.$route.params.type.includes(a.type)
      );
    },
    activeFilter() {
      let search = $("#search");
      this.artworks = data.artworks.filter((artwork) =>
        artwork.name.toLowerCase().includes(search.val().toLowerCase())
      );
      this.makeLayout();
    },
    makeLayout() {
      setTimeout(() => {
        let $grid = document.querySelector(".masonry-row");
        let msnry = new Masonry($grid, {
          itemSelector: ".col",
          percentPosition: true,
        });
        msnry.layout();
      }, 10);
    },
    getArtistName(artistId) {
      return data.artists.find((a) => a.id == artistId).name;
    },
    sortBy(criteria) {
      // criteria - 1 by name
      // criteria - 2 by artist
      if (criteria == 1) {
        this.sort((artwork1, artwork2) => {
          return artwork1.name.localeCompare(artwork2.name);
        });
      } else {
        this.sort((artwork1, artwork2) => {
          return this.getArtistName(artwork1.author).localeCompare(
            this.getArtistName(artwork2.author)
          );
        });
      }
      this.makeLayout();
    },
    sort(cmp) {
      this.artworks.sort(cmp);
    },
    getArtist(artwork) {
      return this.artists.find((artist) => artist.id == artwork.author);
    },
  },
  watch: {
    $route(to, from) {
      this.makeLayout();
    },
  },
};
</script>

<style>
.search-bar {
  margin: 10px !important;
  margin-top: 20px !important;
  margin-bottom: 40px !important;
}

.search-bar input {
  font-size: 30px;
}

.search-bar select {
  font-size: 30px;
}
</style>
