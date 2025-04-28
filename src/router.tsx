import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import LeftMenu from "./components/LeftMenu";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { routeConfig } from "./config/route.config";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ThemeColorPicker from "./components/ThemeColorPicker";
import LanguageSelector from "./components/LanguageSelector";
// import './style/main.scss';
import './i18n';
import { LoginButton } from "./components/base/Button";
import { Providers } from "./reducer/Providers";

const Router = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (<>
        <Providers>
            <BrowserRouter>
                <div className={`flex`}>
                    <LeftMenu isCollapsed={isCollapsed} />
                    <div className="flex-1 p-0 overflow-auto">
                        <div className="flex justify-between items-center px-4 py-0 mb-0 bg-white border-b">
                            <button
                                className="p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300 text-gray-800 transition duration-150"
                                onClick={() => setIsCollapsed(!isCollapsed)}
                            >
                                <Bars3Icon className="w-6 h-6 text-gray-700" />
                            </button>
                            <LoginButton />
                            <LanguageSelector />
                            <ThemeColorPicker />
                        </div>

                        <Routes>
                            {routeConfig.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<route.component />}
                                />
                            ))}
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </Providers>
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
