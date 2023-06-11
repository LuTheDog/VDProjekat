<template>
  <div class="container">
    <div class="input-group mb-3 mt-4">
      <input
        id="search"
        type="text"
        class="form-control"
        aria-label="Text input with dropdown button"
        @keyup="activeFilter()"
      />
      <button
        class="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
    <div
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3"
      data-masonry='{"percentPosition": true,  "itemSelector": ".col" }'
    >
      <ArtworkCard
        v-for="a of artworks"
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

export default {
  mounted: function () {
    let $grid = document.querySelector(".row");
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
  },
  data() {
    return {
      artists: data.artists,
      artworks: data.artworks,
    };
  },
  methods: {
    activeFilter() {
      let search = $("#search");
      this.artworks = data.artworks.filter((artwork) =>
        artwork.name.toLowerCase().includes(search.val())
      );
      let $grid = document.querySelector(".row");
      let msnry = new Masonry($grid, {
        itemSelector: ".col",
        percentPosition: true,
      });
      msnry.layout();
    },
    getArtist(artwork) {
      return this.artists.find((artist) => artist.id == artwork.author);
    },
  },
};
</script>
