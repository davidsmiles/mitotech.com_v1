import ContentCreation from "./components/pages/ContentCreation.vue";
import CorporateBranding from "./components/pages/CorporateBranding.vue";
import Home from "./components/pages/Home.vue";
import OnlineMarketing from "./components/pages/OnlineMarketing.vue";

export default [
    { path: "/", component: Home, name: "home"},
    { path: "/corporate-branding", component: CorporateBranding, name: "corporate-branding"},
    { path: "/content-creation", component: ContentCreation, name: "content-creation"},
    { path: "/online-marketing", component: OnlineMarketing, name: "online-marketing"},
];