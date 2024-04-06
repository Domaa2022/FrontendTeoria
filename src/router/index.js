import { createRouter, createWebHashHistory } from "vue-router";

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
    path: "/results",
    name: " results",
    component: () =>
      import(/* webpackChunkName: "Results" */ "../views/Results.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
