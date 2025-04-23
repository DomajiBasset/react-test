import { themeMap } from "../config/theme.config";


export function getBgColor(color: string) {

    if (themeMap.bg[color]) {
        return themeMap.bg[color];
    } else {
        console.warn('getBgColor:', color, 'is invalid');
        return themeMap.bg.default;
    }
}

/**
 * 
 * @param color color
 * @param type background/border/focus
 * @returns className
 */
export function getInputStyle(color: string, type: 'background' | 'border' | 'focus') {
    const lower = type.toLowerCase();
    const inputStyles = themeMap.input;
    switch (lower) {
        case 'background':
            return inputStyles.background[color] ?? inputStyles.background.default;
        case 'border':
            return inputStyles.border[color] ?? inputStyles.border.default;
        case 'focus':
            return inputStyles.focus[color] ?? inputStyles.focus.default;
        default:
            console.warn(`getInputStyle: type "${type}" is invalid`);
            return undefined;
    }
}
