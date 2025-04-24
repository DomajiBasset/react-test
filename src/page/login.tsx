import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/base/Label";
import { Input } from "../components/base/Input";
import { getBackgroundColor } from "../helpers/tool";
import { useTheme } from "../reducer/ThemeContext";
import { isValidEmail } from "../helpers/utils";
import { Trans, useTranslation } from "react-i18next";
import { SubmitButton } from "../components/base/Button";

export function Login() {
    const ns = 'login';
    const { state: themeState, dispatch } = useTheme();
    const { t } = useTranslation(ns);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        dispatch({ type: 'setNameSpace', ns: ns });
    }, [dispatch]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValidEmail(email)) {
            navigate("/home");
        } else {
            console.warn('not emal')
        }
    };

    return (<>
        <form name="form1" className={`mainForm mx-auto mt-0 ${getBackgroundColor(themeState.color)} p-8 space-y-6`} onSubmit={handleLogin}>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <Label htmlFor="email" children="EMAIL"></Label>
                    <Input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2"
                        placeholder={t('EMAIL_PLACEHOLDER')}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-1/2">
                    <Label htmlFor="password" children="PASSWORD"></Label>
                    <Input
                        id="password"
                        type="password"
                        className="w-full px-4 py-2"
                        placeholder={t('PASSWORD_PLACEHOLDER')}
                    ></Input>
                </div>
            </div>

            <div className="flex justify-center">
                <SubmitButton
                    textCode="LOGIN"
                    className="w-1/4 py-2"
                />
            </div>
        </form>
    </>
    )
}
