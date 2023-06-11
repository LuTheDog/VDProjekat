<template>
  <div class="outer">
    <div>
      <div v-if="open" class="my-modal">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input
            v-model="username"
            type="text"
            class="form-control"
            placeholder="Recipient's username"
          />
          <button
            @click="login()"
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Log In
          </button>
        </div>
      </div>
      <div v-else>
        <h1>Hello {{ currUser }}</h1>
        <h3>My offers:</h3>
        <table class="table-secondary table table-striped">
          <thead class="">
            <tr>
              <th>Amount</th>
              <th>Comment</th>
              <th></th>
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
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="removeOffer(o.id)"
                >
                  Remove offer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn btn-light" @click="logout()">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currUser: null,
      open: false,
      offers: [],
      allOffers: [],
      username: "",
    };
  },
  created() {
    this.currUser = JSON.parse(localStorage.getItem("user"));
    if (this.currUser == null) {
      this.open = true;
    } else {
      this.setOffers();
    }
  },
  methods: {
    setOffers() {
      this.allOffers = JSON.parse(localStorage.getItem("offers"));
      if (this.allOffers == null) return;
      this.offers = this.allOffers.filter(
        (offer) => offer.submitter == this.currUser
      );
    },
    removeOffer(offerId) {
      this.allOffers = this.allOffers.filter((offer) => offer.id != offerId);
      localStorage.setItem("offers", JSON.stringify(this.allOffers));
      this.setOffers();
    },
    logout() {
      this.username = this.currUser = "";
      localStorage.removeItem("user");
      this.open = true;
      window.location.reload();
    },
    login() {
      open = false;
      console.log("logging in...");
      this.currUser = this.username;
      localStorage.setItem("user", JSON.stringify(this.currUser));
      window.location.reload();
    },
  },
};
</script>
<style scoped></style>
