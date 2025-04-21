import { TestEfficiencyPage } from "../page/testEfficiency.js";
import { Home } from "../page/home.js";
import { MainApp } from "../page/main.js";
import Index from "../page/index.js";

export const routeConfig = [
    { labelName: "首頁", to: "/", path: "/", component: Home },
    { labelName: "關於", to: "/main", path: "/main", component: MainApp },
    { labelName: "商品123", to: "/product/123", path: "/product/:id", component: Index },
    { labelName: "Test", to: "/test", path: "/test", component: TestEfficiencyPage }
];

export const allRoutes = {
    home: [''],
    product: [''],
    setting: [''],
};