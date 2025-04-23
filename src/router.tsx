import React, { StrictMode, useState } from "react";
import { createRoot, Root } from "react-dom/client";
import LeftMenu from "./components/LeftMenu";
import { ThemeProvider } from './reducer/ThemeContext';
import './style/main.scss';

const Router = () => {
    return (<>
        <div className="">
            <ThemeProvider>
                <LeftMenu activeTab="" iCollapsed={true}></LeftMenu>
            </ThemeProvider>
        </div>
    </>);
};

const element = document.getElementById("react-root") as HTMLElement;
const win = window as any;

if (!win.__root__) {
    win.__root__ = createRoot(element);
}

if (element) {
    element.style.width = '100%';
    win.__root__.render(<StrictMode><Router /></StrictMode>);
}
