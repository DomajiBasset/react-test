import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { routeConfig } from '../config/route.config';
import ButtonRoute from "./ButtonRoute";

function LeftMenu({ activeTab }: { activeTab: string }) {
    return (
        <div className="left-area flex h-screen">

            <BrowserRouter>
                <div className="bg-gray-800">
                    <ul className="nav2 w-60 text-white p-4 space-y-2">
                        {
                            routeConfig.map((route, index) => (
                                <ButtonRoute key={index} labelName={route.labelName} to={route.to} />
                            ))
                        }
                    </ul>
                </div>
                <div className="right-area flex-1 p-6">
                    <Routes>
                        {routeConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={<route.component />} // Dynamically passing the component
                            />
                        ))}
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default LeftMenu;
