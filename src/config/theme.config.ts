
export const initialTheme: ThemeState = {
    color: 'white',
    namespace: 'login'
};
export type ThemeState = {
    color: string;
    namespace: string;
};
type ThemeMap = {
    colors: string[];
    bg: Record<string, string>;
    input: Record<string, InputStyle>;
    leftMenu: Record<string, LeftMenuStyle>;
    button: Record<string, Record<ButtonType, SubmitButtonStyle>>;
};
type LeftMenuStyle = {
    base: string;
    hover: string;
    link: string;
};
type InputStyle = {
    background: string,
    border: string,
    focus: string,
};
type ButtonType = 'submit';
type SubmitButtonStyle = {
    background: string,
    font: string,
    hover: string,
    focus: string,
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

const _Button = {
    white: {
        submit: {
            background: 'bg-blue-600',
            font: 'font-bold text-white',
            hover: 'hover:bg-blue-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
        }
    },
    red: {
        submit: {
            background: 'bg-red-600',
            font: 'font-bold text-white',
            hover: 'hover:bg-red-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-red-500',
        }
    },
    blue: {
        submit: {
            background: 'bg-blue-600',
            font: 'font-bold text-white',
            hover: 'hover:bg-blue-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
        }
    },
    green: {
        submit: {
            background: 'bg-green-600',
            font: 'font-bold text-white',
            hover: 'hover:bg-green-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-green-500',
        }
    },
    yellow: {
        submit: {
            background: 'bg-yellow-600',
            font: 'font-bold text-white',
            hover: 'hover:bg-yellow-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-yellow-500',
        }
    },
    purple: {
        submit: {
            background: 'bg-purple-600',
            font: 'font-bold text-white',
            hover: 'hover:bg-purple-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-purple-500',
        }
    },
    pink: {
        submit: {
            background: 'bg-pink-600',
            font: 'font-bold text-white',
            hover: 'hover:bg-pink-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-pink-500',
        }
    },
    default: {
        submit: {
            background: 'bg-blue-600',
            font: 'font-bold text-white',
            hover: 'hover:bg-blue-700',
            focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
        }
    },
};
const _Input = {
    white: {
        background: 'bg-white',
        border: 'border border-gray-300',
        focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    },
    red: {
        background: 'bg-white',
        border: 'border border-gray-300',
        focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    },
    blue: {
        background: 'bg-white',
        border: 'border border-gray-300',
        focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    },
    green: {
        background: 'bg-white',
        border: 'border border-gray-300',
        focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    },
    yellow: {
        background: 'bg-white',
        border: 'border border-gray-300',
        focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    },
    purple: {
        background: 'bg-white',
        border: 'border border-gray-300',
        focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    },
    pink: {
        background: 'bg-white',
        border: 'border border-gray-300',
        focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    },
    default: {
        background: 'bg-white',
        border: 'border border-gray-300',
        focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500',
    },
};
const _LeftMenu = {
    white: {
        base: 'bg-gray-800 text-white',
        hover: 'hover:opacity-50',
        link: 'bg-gray-700 text-white',
    },
    red: {
        base: 'bg-gray-800 text-white',
        hover: 'hover:bg-gray-700',
        link: 'bg-gray-700 text-white',
    },
    blue: {
        base: 'bg-gray-800 text-white',
        hover: 'hover:bg-gray-700',
        link: 'bg-gray-700 text-white',
    },
    green: {
        base: 'bg-gray-800 text-white',
        hover: 'hover:bg-gray-700',
        link: 'bg-gray-700 text-white',
    },
    yellow: {
        base: 'bg-gray-800 text-white',
        hover: 'hover:bg-gray-700',
        link: 'bg-gray-700 text-white',
    },
    purple: {
        base: 'bg-gray-800 text-white',
        hover: 'hover:bg-gray-700',
        link: 'bg-gray-700 text-white',
    },
    pink: {
        base: 'bg-gray-800 text-white',
        hover: 'hover:bg-gray-700',
        link: 'bg-gray-700 text-white',
    },
    default: {
        base: 'bg-gray-800 text-white',
        hover: 'hover:bg-gray-700',
        link: 'bg-gray-700 text-white',
    },
};

export const themeMap: ThemeMap = {
    colors: _colors,
    bg: _bg,
    input: _Input,
    leftMenu: _LeftMenu,
    button: _Button
};
