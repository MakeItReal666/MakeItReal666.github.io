import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    component: () => import("/src/pages/Error404.vue"),
  },
  {
    path: "/",
    component: () => import("/src/layouts/MainLayout.vue"),
    children: [
      {
        path: "home",
        component: () => import("/src/pages/Homepage.vue"),
        name: "home",
      },
      {
        path: "explore",
        component: () => import("/src/pages/Explore.vue"),
        name: "explore",
      },
      {
        path: "createproject",
        component: () => import("/src/pages/ProjectRegistration.vue"),
        name: "createproject",
      },
      {
        path: "ranking",
        component: () => import("/src/pages/Ranking.vue"),
        name: "ranking",
      },
      {
        path: "profile/:id",
        component: () => import("/src/pages/UserProfile.vue"),
        name: "profile",
      },
      {
        path: "projects",
        component: () => import("/src/pages/Projects.vue"),
        name: "projects",
      },
      {
        path: "project",
        component: () => import("/src/pages/ProjectDetail.vue"),
        name: "project",
      },
    ],
  },
  {
    path: "/signUpLogin",
    component: () => import("/src/pages/Loginpage.vue"),
    name: "signUpLogin",
  },
  {
    path: "/purpose",
    component: () => import("/src/pages/PurposePage.vue"),
    name: "purpose",
  },
  {
    path: "/areaOfInterest",
    component: () => import("/src/pages/AreaOfInterestPage.vue"),
    name: "areaOfInterest",
  },
  {
    path: "/levelOfExpertise",
    component: () => import("/src/pages/LevelOfExpertisePage.vue"),
    name: "levelOfExpertise",
  },
  {
    path: "/loading",
    component: () => import("/src/pages/LoadingPage.vue"),
    name: "loading",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
