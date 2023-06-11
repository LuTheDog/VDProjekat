<template>
  <div class="card rounded artist-card mx-5">
    <img class="card-img-top" :src="'/images/artists/' + artist.picture" />
    <div class="card-body">
      <h5 class="card-title">{{ artist.name }}</h5>
      <p class="card-text">
        {{ artist.description }}
      </p>
      <a :href="'/pdfs/' + artist.artworks" class="btn btn-primary"
        >All artworks</a
      >
    </div>
  </div>
</template>

<style>
.artist-card {
  width: 20rem;
}
</style>
<script>
export default {
  props: ["artist"],
};
</script>
