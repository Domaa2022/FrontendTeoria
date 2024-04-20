import { createRouter, createWebHashHistory } from "vue-router";
import Results from "../views/Results.vue";

const routes = [
  {
    path: "/",
    name: "landingpage",
    component: () =>
      import(/* webpackChunkName: "landingpage" */ "../views/LandingPage.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: () => import(/* webpackChunkName: "Help" */ "../views/Help.vue"),
  },
  {
    path: "/expectedEntries",
    name: "expectedEntries",
    component: () =>
      import(
        /* webpackChunkName: "ExpectedEntries" */ "../views/ExpectedEntries.vue"
      ),
  },
  {
    path: "/simulator",
    name: "simulator",
    component: () =>
      import(/* webpackChunkName: "Simulator" */ "../views/Simulator.vue"),
  },
  {
    path: "/simulator2",
    name: "simulator2",
    component: () =>
      import(/* webpackChunkName: "Simulator" */ "../views/Simulator2.vue"),
  },
  {
    path: "/seeprojects",
    name: "seeprojects",
    component: () =>
      import(/* webpackChunkName: "SeeProjects" */ "../views/SeeProjects.vue"),
  },
  {
    path: "/compareprojects",
    name: "compareprojects",
    component: () =>
      import(
        /* webpackChunkName: "CompareProjects" */ "../views/CompareProjects.vue"
      ),
  },
  {
    path: "/compareprojects2",
    name: "compareprojects2",
    component: () =>
      import(
        /* webpackChunkName: "CompareProjects" */ "../views/CompareProjects2.vue"
      ),
  },
  {
    path: "/results",
    name: " results",
    component: () =>
      import(/* webpackChunkName: "Results" */ "../views/Results.vue"),
  },
  {
    path: "/deleteproyects",
    name: "deleteproyects",
    component: () =>
      import(
        /* webpackChunkName: "DeleteProyects" */ "../views/DeleteProyects.vue"
      ),
  }
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
