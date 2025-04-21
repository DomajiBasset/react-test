import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LeftMenu from "./components/LeftMenu";


const Router = () => {
    return (<>
        <LeftMenu activeTab=""></LeftMenu>
    </>);
};

const element = document.getElementById("react-root") as HTMLElement;
if (element) {
    element.style.width = '100%';
    const root = createRoot(element);
    root.render(<StrictMode><Router /></StrictMode>);
}
