export interface ThemeI {
    primary_color: string;
    font_family: string;
    errorColor: string;
    successColor: string;
    input: {
        borderColor: string;
        bgColor: string;
    };
    button: {
        bgColor: string;
        borderRadius: string;
        color: string;
        fontWeight: string;
        hover: {
            bgColor: string;
        };
        disabled: {
            bgColor: string;
            color: string;
        };
    };
}
export interface ThemesI {
    "default": ThemeI;
}
export declare const themes: ThemesI;
