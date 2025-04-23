import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { routeConfig } from '../config/route.config';
import RouteButton from "./RouteButton";
import ThemeColorPicker from "./ThemeColorPicker";
import { Bars3Icon } from '@heroicons/react/24/solid';


function LeftMenu({ activeTab, iCollapsed }: { activeTab: string, iCollapsed: boolean }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <BrowserRouter>
            <div className={`flex`}>
                <div className={`left-area h-screen bg-gray-800 text-white transition-all duration-300 ${isCollapsed ? 'w-0' : 'w-60'} overflow-hidden`}>
                    <ul className="space-y-2 mt-16">
                        {routeConfig.map((route, index) => (
                            <RouteButton
                                key={index}
                                labelName={isCollapsed ? "" : route.labelName}
                                to={route.to}
                                // icon={route.icon} // 若有圖示可加上
                                collapsed={isCollapsed} // 傳入狀態
                            />
                        ))}
                    </ul>
                </div>
                <div className="right-area flex-1 p-0 overflow-auto">
                    <div className="flex justify-between items-center px-4 py-2 mb-0 bg-white border-b">
                        <button
                            className="p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300 text-gray-800 transition duration-150"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            <Bars3Icon className="w-6 h-6 text-gray-700" />
                        </button>
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default LeftMenu;
