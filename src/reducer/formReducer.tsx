import { RowData } from "../config/pickItem.config";

export type FormState = {
    startDate: Date;
    pickAreaValue: RowData[];
    text: string;
    startPlace: string;
    endPlace: string;
};

type FormAction =
    | { type: "SET_START_DATE"; payload: Date }
    | { type: "SET_PICK_AREA"; payload: RowData[] }
    | { type: "SET_TEXT"; payload: string }
    | { type: "SET_START_PLACE"; payload: string }
    | { type: "SET_END_PLACE"; payload: string };

export function formReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
        case "SET_START_DATE":
            return { ...state, startDate: action.payload };
        case "SET_PICK_AREA":
            return { ...state, pickAreaValue: action.payload };
        case "SET_TEXT":
            return { ...state, text: action.payload };
        case "SET_START_PLACE":
            return { ...state, startPlace: action.payload };
        case "SET_END_PLACE":
            return { ...state, endPlace: action.payload };
        default:
            return state;
    }
};