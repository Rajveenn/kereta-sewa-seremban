export default [
  {
    path: "/",
    redirect: "/car-rental-seremban",
  },
  
  {
    path: "/car-rental-seremban",
    meta: { layout: "default", noScroll: true, guest: true },
    name: "car-rental-seremban",
    component: () => import("@/pages/cars.vue"),
  },

  {
    path: "/404",
    name: "AccessDenied",
    meta: { layout: "default", guest: true, noScroll: true },
    component: () => import("@/pages/Deny.vue"),
  },
];
