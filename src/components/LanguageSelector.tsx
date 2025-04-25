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
        <>
            <div className="space-x-2">
                <label htmlFor="language-select" className="inline-flex items-center">
                    <div className=''>
                        <GlobeAltIcon className={`w-6 h-6 inline-block`} style={{ fill: color }}></GlobeAltIcon>
                    </div>
                    {/* <Trans>LANGUAGE</Trans>: */}
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
        </>
    );
};

export default LanguageSelector;
