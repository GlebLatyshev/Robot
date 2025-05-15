import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../home/HomePage.vue"
import RobotBuilder from "@/build/RobotBuilder.vue";
import PartInfo from "@/parts/PartInfo.vue";
import QRcode from "@/build/QRcode.vue";

export default createRouter ({
    history: createWebHashHistory(),
    routes: [{
        path: "/",
        name: "ГЛАВНАЯ",
        component: HomePage,
    }, 
    {
        path: "/build",
        name: "ПОСТРОЙ РОБОТА",
        component: RobotBuilder,
    },
    {
        path: "/qrcode",
        name: "QR КОД",
        component: QRcode,
    },
    {
        path: "/part/:partType/:id",
        name: "ЗАПЧАСТИ",
        component: PartInfo,
    },
],
})