const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue")
  },
  {
    path: "/index",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Dashboard.vue") },
      { path: "/Dashboard2", component: () => import("pages/Dashboard2.vue") },
      { path: "/Profile", component: () => import("pages/UserProfile.vue") },
      { path: "/TreeTable", component: () => import("pages/TreeTable.vue") },
      { path: "/Charts", component: () => import("pages/Charts.vue") },
      { path: "/Cards", component: () => import("pages/Cards.vue") },
      { path: "/Tables", component: () => import("pages/Tables.vue") },
      { path: "/Contact", component: () => import("pages/Contact.vue") },
      { path: "/Checkout", component: () => import("pages/Checkout.vue") },
      { path: "/Calendar", component: () => import("pages/Calendar.vue") },
      { path: "/Pagination", component: () => import("pages/Pagination.vue") },
      { path: "/Taskboard", component: () => import("pages/TaskBoard.vue") }
    ]
  },
  {
    path: "/Lock",
    component: () => import("pages/LockScreen.vue")
  },
  {
    path: "/Pricing",
    component: () => import("pages/Pricing.vue")
  },
  {
    path: "/Mail",
    component: () => import("layouts/Mail.vue")
  },
  {
    path: "/Lock-2",
    component: () => import("pages/LockScreen-2.vue")
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
