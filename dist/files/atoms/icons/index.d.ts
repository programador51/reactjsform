/// <reference types="react" />
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
declare type IconsPropsI = Omit<FontAwesomeIconProps, "icon">;
export interface IconsI extends IconsPropsI {
    /**
     * Icon to render
     */
    icon: "timesCircle" | "checkCircle" | "eye" | "eyeSlash";
    /**
     * Additional propertys in case modify the icon a little more
     */
    iconProps?: FontAwesomeIconProps;
}
export default function Icon({ icon, ...iconProps }: IconsI): JSX.Element;
export {};
