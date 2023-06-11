<template>
  <div>
    <div class="row">
      <div class="col-6">
        <h1>{{ artwork.name }}</h1>
        <h3>Add new offer</h3>
        <form
          class="d-flex justify-content-center mb-3"
          @submit.prevent="submitOffer()"
        >
          <table>
            <tr>
              <td>Offer amount:</td>
              <td>
                <input type="number" v-model="offerAmount" required />
              </td>
            </tr>
            <tr>
              <td>Offer comment:</td>
              <td>
                <input type="text" v-model="offerComment" required />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <button class="btn btn-primary" type="submit">
                  Submit offer
                </button>
              </td>
            </tr>
          </table>
        </form>
        <h3>Offers:</h3>
        <table class="table-secondary table">
          <tr v-for="o in offers" :key="o.id">
            <td>
              {{ o.amount }}
            </td>
            <td>
              {{ o.comment }}
            </td>
          </tr>
        </table>
      </div>
      <div class="col-6">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div
              v-for="(im, index) in artwork.images"
              :key="index"
              :class="index == 0 ? 'carousel-item active' : 'carousel-item'"
            >
              <img
                :src="'/images/' + im"
                class="d-block w-100 h-50 carousel-image"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.carousel-control-prev,
.carousel-control-next {
  filter: invert(100%); /* Invert the color to black */
}

.carousel-image {
  max-height: 400px;
  object-fit: contain;
}
</style>
<script>
import data from "../assets/data.js";
export default {
  data() {
    return {
      artwork: data.artworks[0],
      offers: [],
      offerAmount: 0,
      offerComment: "",
    };
  },
  created() {
    let artworkId = this.$route.query.id;
    this.artwork = data.artworks.find((art) => artworkId == art.id);
    this.offers = JSON.parse(localStorage.getItem("offers"));
    if (this.offers == null) {
      this.offers = [];
    }
  },
  methods: {
    submitOffer() {
      let newOffer = {
        amount: this.offerAmount,
        comment: this.offerComment,
      };
      this.offers.push(newOffer);
      this.offerAmount = 0;
      this.offerComment = "";
      localStorage.setItem("offers", JSON.stringify(this.offers));
    },
  },
};
</script>
