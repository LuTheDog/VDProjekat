<template>
  {{ word }}
</template>
<script>
import en from "../assets/translations/en.js";
import rs from "../assets/translations/rs.js";
export default {
  name: "L",
  props: ["t"],
  data() {
    return {
      en: en,
      rs: rs,
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
      this.word = this.en.find((w) => w.title == this.t).description;
    } else {
      this.word = this.rs.find((w) => w.title == this.t).description;
    }
    if (this.word == undefined) {
      this.word = "NO TRANSLATION";
    }
  },
};
</script>
