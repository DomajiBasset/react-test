import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import LeftMenu from "./components/LeftMenu";
import './style/main.scss';
import { Route, Routes } from "react-router";
import { routeConfig } from "./config/route.config";


const Router = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (<>
        <div className="">
            <LeftMenu activeTab="" iCollapsed={isCollapsed}></LeftMenu>
        </div>
    </>);
};

const element = document.getElementById("react-root") as HTMLElement;
if (element) {
    element.style.width = '100%';
    const root = createRoot(element);
    root.render(<StrictMode><Router /></StrictMode>);
}
