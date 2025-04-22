import React, { StrictMode } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/main");
    };

    return (<>
        <form name="form1" className="mainForm mx-auto mt-0 bg-white p-8 space-y-6" onSubmit={handleLogin}>
            <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="請輸入 email"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                    密碼
                </label>
                <input
                    type="password"
                    id="password"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="請輸入密碼"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
                登入
            </button>
        </form>
    </>
    )
}
