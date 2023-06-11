<template>
  <div class="container">
    <div class="row search-bar">
      <div class="col-lg-9 col-md-12">
        <input
          id="search"
          type="text"
          class="form-control"
          @keyup="activeFilter()"
        />
      </div>
      <div class="col-lg-3 col-md-12">
        <select id="select-type" @input="activeFilter()" class="form-select">
          <option value="">All Artoworks</option>
          <option value="painting">Paintings</option>
          <option value="sculpture">Sculptures</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
    <hr />
    <div
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3 masonry-row"
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
      let inputType = $("#select-type");
      console.log(inputType.val());
      this.artworks = data.artworks.filter((artwork) =>
        artwork.name.toLowerCase().includes(search.val())
      );
      this.artworks = this.artworks.filter((artwork) =>
        artwork.type.includes(inputType.val())
      );
      setTimeout(() => {
        let $grid = document.querySelector(".masonry-row");
        let msnry = new Masonry($grid, {
          itemSelector: ".col",
          percentPosition: true,
        });
        msnry.layout();
      }, 10);
    },
    getArtist(artwork) {
      return this.artists.find((artist) => artist.id == artwork.author);
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
