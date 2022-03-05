export interface ThemeI {
    primary_color: string;
    font_family: string;
    errorColor: string;
    successColor: string;
    input: {
        borderColor: string;
        bgColor: string;
    },
    button: {
        bgColor: string;
        borderRadius: string;
        color: string;
        fontWeight: string;
        hover: {
            bgColor: string;
        }
        disabled: {
            bgColor: string;
            color: string;
        }
    }
}

export interface ThemesI {
    "default": ThemeI;
}
export const themes: ThemesI = {
    default: {
        primary_color: "#1d1d1d",
        font_family: "'Arial'",
        errorColor: "#e32525",
        successColor: "#309016",
        input: {
            bgColor: "#f9f9f9",
            borderColor: "#cacaca"
        },
        button: {
            bgColor: "#4dadfe",
            borderRadius: "20px",
            color: "#fff",
            fontWeight: "bold",
            hover: {
                bgColor: "#008cfe"
            },
            disabled: {
                bgColor: "#c5e3fd",
                color: "#4d81a0"
            }
        }
    }
}
