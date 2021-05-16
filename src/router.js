import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import DcHeros from "./pages/DcHeroes";
import Calendar from "./pages/Calendar";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";
import ReusableModal from "./pages/ReusableModal";
import Chat from "./pages/Chat";
import store from "./store/index";

const routes = [
    { path: "/", component: Home },
    { path: "/dc-heroes", component: DcHeros },
    { path: "/calendar", component: Calendar },
    { path: "/markdown", component: Markdown },
    { path: "/slider", component: Slider },
    { path: "/calculator", component: Calculator },
    { path: '/modal', component: ReusableModal },
    { path: "/chat",
      component: Chat,
      meta: { middleware: "auth" },
     },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _, next) => {
    if (to.meta.middleware) {
      const middleware = require(`./middleware/${to.meta.middleware}`);
      if (middleware) {
        middleware.default(next, store);
      } else {
        next();
      }
    } else {
      next();
    }
  });

export default router;