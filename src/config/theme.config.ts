

// 型別定義
type ThemeMap = {
    colors: string[];  // 顏色列表
    bg: Record<string, string>;  // 背景顏色物件
    input: {
        background: Record<string, string>;  // 輸入框背景顏色
        border: Record<string, string>;      // 邊框類型
        focus: Record<string, string>;       // 焦點樣式
    };
    submitButton: Record<string, string>;   // 提交按鈕顏色
};

export type ThemeState = {
    color: string;
}

export const initialTheme: ThemeState = {
    color: 'purple',
};

const _colors = [
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
];

const _bg = {
    white: 'bg-white',
    red: 'bg-red-300',
    blue: 'bg-blue-300',
    green: 'bg-green-300',
    yellow: 'bg-yellow-300',
    purple: 'bg-purple-300',
    pink: 'bg-pink-300',
    default: 'bg-white'
};
const _inputBackground = {
    white: 'bg-white',
    red: 'bg-white',
    blue: 'bg-white',
    green: 'bg-white',
    yellow: 'bg-white',
    purple: 'bg-white',
    pink: 'bg-white',
    default: 'bg-white'
};
const _inputBorder = {
    white: 'border border-gray-300',
    red: 'border border-gray-300',
    blue: 'border border-gray-300',
    green: 'border border-gray-300',
    yellow: 'border border-gray-300',
    purple: 'border border-gray-300',
    pink: 'border border-gray-300',
    default: 'border border-gray-300'
};
const _inputFocus = {
    white: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    red: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    blue: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    green: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    yellow: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    purple: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    pink: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    default: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
};
const _submitButton = {
    white: "bg-white",
    red: 'bg-red-300',
    blue: 'bg-blue-300',
    green: 'bg-green-300',
    yellow: 'bg-yellow-300',
    purple: 'bg-purple-300',
    pink: 'bg-pink-300',
};

export const themeMap: ThemeMap = {
    colors: _colors,
    bg: _bg,
    input: {
        background: _inputBackground,
        border: _inputBorder,
        focus: _inputFocus
    },
    submitButton: _submitButton
};
