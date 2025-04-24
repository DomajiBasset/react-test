import { themeMap } from "../config/theme.config";


export function getBackgroundColor(color: string) {
    if (themeMap.bg[color]) {
        return themeMap.bg[color];
    } else {
        console.warn('getBackgroundColor:', color, 'is invalid');
        return themeMap.bg.default;
    }
}

/**
 * 
 * @param color 
 * @returns InputStyle
 */
export function getInputStyle(color: string) {
    return themeMap.input[color] ?? themeMap.input.default;
}

/**
 * 
 * @param color
 * @returns LeftMenuStyle
 */
export function getLeftMenuStyle(color: string) {
    return themeMap.leftMenu[color] ?? themeMap.leftMenu.default;
}

/**
 * 
 * @param color
 * @returns SubmitButtonStyle
 */
export function getSubmitButtonStyle(color: string) {
    return themeMap.button[color].submit ?? themeMap.button.default.submit;
}