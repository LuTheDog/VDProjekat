<template>
  <div class="col">
    <div class="card mt-4 rounded">
      <a href="#">
        <img
          @click="showDetails(artwork)"
          v-bind:src="getImagePath(artwork)"
          class="card-img-top artwork-image"
          :alt="artwork.name"
        />
      </a>
      <div class="card-body">
        <h2 class="card-title">
          <b>{{ artwork.name }}</b>
        </h2>
        <div class="text-secondary">
          <em>{{ artist.name }}</em>
        </div>
        <p class="read-more card-text">"{{ getCardDescription(artwork) }}.."</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtworkCard",
  props: {
    artwork: Object,
    artist: Object,
  },
  methods: {
    activeFilter() {},
    getImagePath(artwork) {
      return "../images/artworks/" + artwork.images[0];
    },
    getCardDescription(artwork) {
      if (artwork.description.length <= 140) {
        return artwork.description;
      } else {
        let newDesc = artwork.description.slice(0, 140);
        let lastSpaceIndex = newDesc.lastIndexOf(" ");
        if (lastSpaceIndex !== -1) {
          return newDesc.slice(0, lastSpaceIndex);
        } else {
          return newDesc;
        }
      }
    },
    showDetails(artwork) {
      this.$router.push({ path: "artwork", query: { id: artwork.id } });
    },
  },
};
</script>

<style>
.card:hover {
  box-shadow: 8px 8px 5px lightslategray;
  transform: scale(1.1);
  transition: 0.3s;
  z-index: 1;
}

.read-more {
  opacity: 0;
  font-size: 0;
  transition: 0.3s;
}

.card:hover .read-more {
  opacity: 1;
  font-size: medium;
  transition: 0.7s;
}

.card {
  transition: 0.3s;
  margin: 10px;
}

.artwork-image {
  object-fit: cover;
  transition: 0.3s;
}

.card:hover .artwork-image {
  transition: 0.7s;
}
</style>
