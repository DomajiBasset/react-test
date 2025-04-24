import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { langMap } from '../config/lang.config';
import { GlobeAltIcon, LanguageIcon } from "@heroicons/react/24/solid";
import { useTheme } from '../reducer/ThemeContext';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const { state: themeState } = useTheme();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    const color = themeState.color === 'white' ? 'black' : themeState.color;

    return (
        <div className="">
            <div className="space-x-2">
                <label htmlFor="language-select" className="inline-flex">
                    <GlobeAltIcon className={`w-5 h-5`} style={{ fill: color }}></GlobeAltIcon>
                    <Trans>LANGUAGE</Trans>:
                </label>
                <select
                    id="language-select"
                    value={i18n.language}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded w-30 text-center"
                >
                    {Object.entries(langMap).map(([key, value]) => (
                        <option key={key} value={key}>
                            <Trans>{value}</Trans>
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default LanguageSelector;
