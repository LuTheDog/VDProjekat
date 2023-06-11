import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArtworksView from "../views/ArtworksView.vue";
import ArtworkView from "../views/ArtworkView.vue";
import ArtistsView from "../views/ArtistsView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path:"/artworks",
    name:"artworks",
    component:ArtworksView
  },
  {
    path: "/artworks/:type",
    name: "artworksByType",
    component: ArtworksView,
  },
  {
    path: "/artwork",
    name: "artwork",
    component: ArtworkView,
  },
  {
    path: "/artists",
    name: "artists",
    component: ArtistsView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
