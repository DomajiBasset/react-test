import React from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/base/Label";
import { Input } from "../components/base/Input";
import { getBgColor } from "../helpers/tool";
import { useTheme } from "../reducer/ThemeContext";

export function Login() {
    const { state: themeState, dispatch } = useTheme();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/home");
    };

    return (<>
        <form name="form1" className={`mainForm mx-auto mt-0 ${getBgColor(themeState.color)} p-8 space-y-6`} onSubmit={handleLogin}>
            <div>
                <Label htmlFor="email" children="Email"></Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="請輸入 email"
                ></Input>
            </div>
            <div>
                <Label htmlFor="password" children="Password"></Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="請輸入 password"
                ></Input>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-purple-600 transition-colors"
            >
                登入
            </button>
        </form>
    </>
    )
}
