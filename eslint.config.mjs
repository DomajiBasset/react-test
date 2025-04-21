import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import js from "@eslint/js";
import ts from 'typescript-eslint'

export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        plugins: {
            "react": react,
            "react-hooks": reactHooks
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules
        }
    }
];