<template>
  <div class="about m-5">
    <div class="row justify-content-center">
      <img
        class="col-lg-4 col-md-6 col-sm-12 mb-5"
        alt="Vue logo"
        src="../assets/simplicity.png"
      />
    </div>
    <h1>
      <L t="ABOUTTEXT" />
    </h1>
    <div class="row mt-5">
      <div class="col-lg-12"></div>
      <iframe
        class=""
        height="800"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=20.473070740699768%2C44.80412826798814%2C20.479293465614322%2C44.807154087174354&amp;layer=mapnik&amp;marker=44.80564119742057%2C20.476182103157043"
        style="border: 1px solid black"
      ></iframe>
    </div>
  </div>
</template>

<script>
import L from "../components/Localization.vue";
export default {
  components: {
    L,
  },
};
</script>
