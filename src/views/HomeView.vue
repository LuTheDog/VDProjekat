<template>
  <div class="mt-5 mb-5">
    <div class="row justify-content-center">
      <img
        class="col-lg-4 col-md-6 col-sm-12 mb-5"
        alt="Vue logo"
        src="../assets/simplicity.png"
      />
    </div>
    <div class="row big-thing text-center mt-5">
      <div class="col-12"><L t="ARTISSIMPLE" />.</div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <div class="card mt-4 rounded">
        <a href="#">
          <img
            src="../../public/images/artworks/monalisa1.png"
            class="card-img-top artwork-image"
            alt="Mona Lisa"
            @click="link('artworks')"
          />
        </a>
        <div class="card-body">
          <h2 class="card-title">
            <b>NEW COLLECTIONS</b>
          </h2>
          <p class="read-more card-text">
            Discover captivating artworks that capture the essence of refined
            beauty. Each piece is meticulously crafted, reflecting a harmonious
            blend of minimalism and grace. Delicate brushstrokes and clean lines
            invite you to contemplate the power of simplicity.
          </p>
        </div>
      </div>
    </div>

    <div class="col-lg-6 col-md-12">
      <div class="card mt-4 rounded">
        <a href="#">
          <img
            src="../../public/images/artists/davinki.jpg"
            class="card-img-top artwork-image"
            alt="Davinki"
            @click="link('artists')"
          />
        </a>
        <div class="card-body">
          <h2 class="card-title">
            <b>OUR ARTISTS</b>
          </h2>
          <p class="read-more card-text">
            Step into our art gallery and be introduced to a collective of
            artists whose creations embody the essence of simply elegance. Each
            artist meticulously crafts their works, utilizing delicate
            brushstrokes and clean lines to capture refined beauty.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="row m-5">
    <h1><L t="LATESTOFFERS" />:</h1>
  </div>
  <div class="row">
    <div
      v-for="o of getOffers()"
      :key="o.id"
      class="col-lg-4 col-md-6 col-sm-12"
    >
      <ArtworkCard :artwork="getArtwork(o)" :artist="{ name: '' }" />
      <h3><L t="OFFER" />: {{ o.amount }}</h3>
    </div>
  </div>
</template>

<script>
import ArtworkCard from "../components/ArtworkCard.vue";
import L from "../components/Localization.vue";
import data from "../assets/data.js";
export default {
  name: "HomeView",
  data() {
    return {
      artworks: data.artworks,
      artists: data.artists,
    };
  },
  methods: {
    link(url) {
      this.$router.push(url);
    },
    getOffers() {
      let offers = JSON.parse(localStorage.getItem("offers")).slice(-3);
      console.log(offers);
      return offers;
    },
    getArtwork(offer) {
      return this.artworks.find((a) => a.id == offer.artwork);
    },
    getArtist(offer) {},
  },
  components: {
    L,
    ArtworkCard,
  },
};
</script>

<style scoped>
.artwork-image {
  height: 400px;
}

.card:hover .artwork-image {
  height: 300px;
}

.read-more {
  margin-top: 10px;
  color: #919191;
}
</style>
