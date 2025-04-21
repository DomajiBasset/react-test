import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { routeConfig } from '../config/route.config';
import ButtonRoute from "./ButtonRoute";

function LeftMenu({ activeTab, iCollapsed }: { activeTab: string, iCollapsed: boolean }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-green-100">
            <BrowserRouter>
                <div className={`left-area bg-gray-800 text-white transition-all duration-300 ${isCollapsed ? 'w-0 overflow-hidden' : 'w-60'}`}>
                    <ul className="space-y-2 mt-16">
                        {routeConfig.map((route, index) => (
                            <ButtonRoute
                                key={index}
                                labelName={isCollapsed ? "" : route.labelName}
                                to={route.to}
                                // icon={route.icon} // 若有圖示可加上
                                collapsed={isCollapsed} // 傳入狀態
                            />
                        ))}
                    </ul>
                </div>
                <div className="right-area flex-1 p-1 overflow-auto">
                    <div className="flex justify-left mb-4">
                        <button
                            className="px-4 py-2 rounded-xl hover:bg-gray-300 bg-gray-200"
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
                </div>
            </BrowserRouter>
        </div>
    );
}

export default LeftMenu;
