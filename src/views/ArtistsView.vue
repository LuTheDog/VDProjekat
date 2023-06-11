<template>
  <div>
    <div class="d-flex justify-content-center flex-wrap">
      <div v-for="artist in artists" :key="artist.id" class="my-2 mx-2">
        <ArtistCard :artist="artist" />
      </div>
    </div>
  </div>
</template>

<script>
import data from "../assets/data.js";
import ArtistCard from "../components/ArtistCard.vue";
export default {
  components: {
    ArtistCard,
  },
  data() {
    return {
      artists: [],
    };
  },
  created() {
    this.artists = data.artists;
  },
};
</script>
