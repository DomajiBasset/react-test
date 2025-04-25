import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/base/Label";
import { Input } from "../components/base/Input";
import { getBackgroundColor } from "../helpers/tool";
import { useTheme } from "../reducer/ThemeContext";
import { isValidEmail } from "../helpers/utils";
import { SubmitButton } from "../components/base/Button";

type LoginFields = "email" | "password";
type LoginErrors = Partial<Record<LoginFields, string>>;

export function Login() {
    const ns = 'login';
    const { state: themeState, dispatch } = useTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<LoginErrors>({});
    const navigate = useNavigate();

    const refs: Record<LoginFields, React.RefObject<HTMLInputElement | null>> = {
        email: useRef<HTMLInputElement>(null),
        password: useRef<HTMLInputElement>(null),
    };

    useEffect(() => {
        dispatch({ type: 'setNameSpace', ns: ns });
    }, [dispatch]);

    const validate = (email: string, password: string) => {
        const newErrors: LoginErrors = {};
        if (!isValidEmail(email)) newErrors.email = "ERROR_EMAIL_INVALID";
        if (password.length < 6) newErrors.password = "ERROR_PASSWORD_INVALID";
        return newErrors;
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validate(email, password);
        setErrors(newErrors);

        // 自動 focus 第一個錯誤欄位
        const firstErrorField = Object.keys(newErrors)[0] as LoginFields | undefined;
        if (firstErrorField && refs[firstErrorField].current) {
            refs[firstErrorField].current!.focus();
        }

        if (Object.keys(newErrors).length === 0) {
            navigate("/home");
        }
    };

    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setEmail(value)
        setErrors(validate(value, password));
    }
    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setPassword(value)
        setErrors(validate(email, value));
    }

    return (<>
        <form name="form1" className={`mx-auto p-8 space-y-6 ${getBackgroundColor(themeState.color)}`} onSubmit={handleLogin} noValidate>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <Label htmlFor="email" textCode="EMAIL"></Label>
                    <Input
                        ref={refs.email}
                        id="email"
                        type="email"
                        className="w-full px-4 py-2"
                        placeholderCode="EMAIL_PLACEHOLDER"
                        errorCode={errors.email}
                        onChange={(e) => handleEmail(e)}
                    ></Input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-1/2">
                    <Label htmlFor="password" textCode="PASSWORD"></Label>
                    <Input
                        ref={refs.password}
                        id="password"
                        type="password"
                        className="w-full px-4 py-2"
                        placeholderCode="PASSWORD_PLACEHOLDER"
                        errorCode={errors.password}
                        onChange={(e) => handlePassword(e)}
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
