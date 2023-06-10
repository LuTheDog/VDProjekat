<template>
  <div v-for="d in artworks" :key="d.id">
    <h1>{{ d.name }}</h1>
  </div>
</template>

<script>
import data from "../assets/data.js";
export default {
  data() {
    return {
      artists: data.artists,
      artworks: data.artworks,
    };
  },
  construct() {},
};
</script>
