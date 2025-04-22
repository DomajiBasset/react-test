import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { routeConfig } from '../config/route.config';
import ButtonRoute from "./ButtonRoute";
import BgColorChanger from "./BgColorChanger";
import { Bars3Icon } from '@heroicons/react/24/solid';


function LeftMenu({ activeTab, iCollapsed }: { activeTab: string, iCollapsed: boolean }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [bgColor, setBgColor] = useState('bg-red-300');

    return (
        <div className={`flex h-screen ${bgColor}`}>
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
                <div className="right-area flex-1 p-0 overflow-auto">
                    <div className="flex justify-between items-center px-4 py-2 mb-0 bg-white border-b">
                        <button
                            className="p-2 rounded-lg hover:bg-gray-100 bg-gray-50 border border-gray-300 text-gray-800 transition duration-150"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            <Bars3Icon className="w-6 h-6 text-gray-700" />
                        </button>
                        <BgColorChanger
                            initialColor={bgColor}
                            onChange={(color) => setBgColor(color)}
                        />
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
