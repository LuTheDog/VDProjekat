<template>
  <div class="row">
    <div class="col-lg-6 col-12 align-items-center d-flex flex-column">
      <h1>{{ artwork.name }}</h1>
      <h4>{{ artist.name }}</h4>
      <p>{{ artist.description }}</p>
      <h3 class="text-success mt-4 bg-warning-subtle px-3 py-1">
        Estimated value: {{ artwork.price }}
      </h3>
      <h4 class="mt-4 bg-secondary-subtle px-3 py-1">
        Estimated age: {{ artwork?.age }} years
      </h4>
    </div>
    <div class="col-12 col-lg-6">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div
            v-for="(im, index) in artwork.images"
            :key="index"
            :class="index == 0 ? 'carousel-item active' : 'carousel-item'"
          >
            <img
              :src="'/images/artworks/' + im"
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
    <div class="row">
      <div class="">
        <hr />
        <h3>Add new offer</h3>
        <form
          class="d-flex justify-content-center mb-3"
          @submit.prevent="submitOffer()"
        >
          <table>
            <tr>
              <td class="text-start">Offer amount:</td>
              <td class="text-end">
                <input
                  class="form-control"
                  type="number"
                  v-model="offerAmount"
                  required
                />
              </td>
            </tr>
            <tr>
              <td class="text-start">Offer comment:</td>
              <td class="text-end">
                <input
                  type="text"
                  class="form-control"
                  v-model="offerComment"
                  required
                />
              </td>
            </tr>
            <tr>
              <td colspan="2" class="">
                <button class="btn btn-primary" type="submit">
                  Submit offer
                </button>
              </td>
            </tr>
          </table>
        </form>
        <h3>Offers:</h3>
        <table class="table-secondary table table-striped">
          <thead class="">
            <tr>
              <th>Amount</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="o in offers" :key="o.id">
              <td>
                {{ o.amount }}
              </td>
              <td>
                {{ o.comment }}
              </td>
            </tr>
          </tbody>
        </table>
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
      user: "",
      artist: null,
    };
  },
  created() {
    if (localStorage.getItem("user") == null) {
      this.user = "Guest";
    } else {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
    let artworkId = this.$route.query.id;
    this.artwork = data.artworks.find((art) => artworkId == art.id);
    this.offers = JSON.parse(localStorage.getItem("offers"));
    if (this.offers == null) {
      this.offers = [];
    }
    this.artist = data.artists.find((a) => a.id == this.artwork.author);
  },
  methods: {
    submitOffer() {
      let newOffer = {
        id: this.offers.length,
        submitter: this.user,
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
