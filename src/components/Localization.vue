<template>
  {{ word }}
</template>
<script>
import en from "../assets/translations/en.js";
import rs from "../assets/translations/rs.js";
export default {
  props: ["t"],
  data() {
    return {
      language: "en",
      word: "",
    };
  },
  created() {
    this.language = JSON.parse(localStorage.getItem("language"));
    if (this.language == null) {
      this.language = "en";
      localStorage.setItem("language", JSON.stringify(this.language));
    }
    if (this.language == "en") {
      this.word = en.find((w) => w.title == this.t).description;
    } else {
      this.word = rs.find((w) => w.title == this.t).description;
    }
  },
};
</script>
