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
      <div class="col-12">ART IS SIMPLE.</div>
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
            <b>ARTWORKS.</b>
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
          />
        </a>
        <div class="card-body">
          <h2 class="card-title">
            <b>ARTISTS.</b>
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
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    link(url) {
      this.$router.push(url);
    },
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
