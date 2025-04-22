import { TestEfficiencyPage } from "../page/testEfficiency.js";
import { Login } from "../page/login.js";
import { Home } from "../page/home.js";
import Index from "../page/index.js";
import Purchase from "../page/purchase.js";
import Payment from "../page/payment.js";
import Success from "../page/success.js";
import Records from "../page/records.js";

export const routeConfig = [
    { labelName: "登入", to: "/login", path: "/login", component: Login },
    { labelName: "首頁/搜尋", to: "/home", path: "/home", component: Home },
    { labelName: "購票", to: "/purchase", path: "/purchase", component: Purchase },
    { labelName: "付款", to: "/payment", path: "/payment", component: Payment },
    { labelName: "訂票成功", to: "/success", path: "/success", component: Success },
    { labelName: "訂票紀錄", to: "/records", path: "/records", component: Records },
    { labelName: "個人資訊", to: "/user/123", path: "/user/:id", component: Index },
    { labelName: "Test", to: "/test", path: "/test", component: TestEfficiencyPage }
];
//多語系，APP?
export const allRoutes = {
    home: [''],
    product: [''],
    setting: [''],
};