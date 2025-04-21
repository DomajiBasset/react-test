import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import LeftMenu from "./components/LeftMenu";
import { Route, Routes } from "react-router";
import { routeConfig } from "./config/route.config";


const Router = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (<>
        <div className="">

            <LeftMenu activeTab="" iCollapsed={isCollapsed}></LeftMenu>
            {/* <div className="flex-1 p-6 overflow-auto">
                <div className="flex justify-end mb-4">
                    <button
                        className="p-2 rounded hover:bg-gray-200 bg-gray-100"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        ☰
                    </button>
                </div>
                <Routes>
                    {routeConfig.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </div> */}
            {/* <button
                className="p-2 m-2 rounded hover:bg-gray-700"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                ☰
            </button> */}
        </div>
    </>);
};

const element = document.getElementById("react-root") as HTMLElement;
if (element) {
    element.style.width = '100%';
    const root = createRoot(element);
    root.render(<StrictMode><Router /></StrictMode>);
}
