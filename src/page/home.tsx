import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

export function Home() {

    return (<>
        <form name="form1" className="mainForm mx-auto mt-10 bg-white p-8 rounded shadow space-y-6">
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
            <div className="form">
                <div className="form_table">

                </div>
            </div>
        </form>
    </>
    )
}


// const element = document.getElementById("react-item") as HTMLElement;
// if (element) {
//     element.style.width = '100%';
//     const root = createRoot(element);
//     root.render(<StrictMode><Home /></StrictMode>);
// }
