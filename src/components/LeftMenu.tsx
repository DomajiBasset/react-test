import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { routeConfig } from '../config/route.config';
import ButtonRoute from "./ButtonRoute";

function LeftMenu({ activeTab }: { activeTab: string }) {


    return (
        <BrowserRouter>
            <div className="left-menu">
                <ul className="nav2">
                    {
                        routeConfig.map((route, index) => (
                            <ButtonRoute key={index} labelName={route.labelName} to={route.to} />
                        ))
                    }
                </ul>
            </div>
            <Routes>
                {routeConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />} // Dynamically passing the component
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default LeftMenu;
