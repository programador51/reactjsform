import Pass from ".";
import Icon from "../icons";
interface ShowPasswordPropsI {
    /**
     * Indicates if the input must show the button to reveal the password typed
     */
    showPassword: boolean;
}
export declare const Password: import("styled-components").StyledComponent<typeof Pass, any, {}, never>;
export declare const IsRequired: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const BulletValidation: import("styled-components").StyledComponent<typeof Icon, any, {}, never>;
export declare const ShowPassword: import("styled-components").StyledComponent<"div", any, ShowPasswordPropsI, never>;
export declare const PasswordField: import("styled-components").StyledComponent<"div", any, ShowPasswordPropsI, never>;
export {};
