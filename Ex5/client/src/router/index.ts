import { ContactView, CalculatorView, RegisterView, LoginView, ProfileView } from "@/views"
import { createRouter, createWebHistory } from "vue-router"
import { authClient } from "@/server"

const routes = [
  {
    path: "/",
    name: "Hjem",
    component: CalculatorView,
  },
  {
    path: "/contact",
    name: "Kontakt",
    component: ContactView,
  },
  {
    path: "/register",
    name: "Registrer deg",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "Logg inn",
    component: LoginView,
  },
  {
    path: "/profile",
    name: "Profil",
    component: ProfileView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const publicPages = ["/login", "/register"]
  const authRequired = !publicPages.includes(to.path)
  const isLoggedIn = await authClient.isTokenValid()

  if (authRequired && !isLoggedIn) {
    return next("/login")
  } else {
    next()
  }
})
export default router
