import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
// import { Icon } from "@fortawesome/fontawesome-svg-core";

const icons = {
  timesCircle: faTimesCircle,
  checkCircle: faCheckCircle,
  eye: faEye,
  eyeSlash: faEyeSlash,
};

type IconsPropsI = Omit<FontAwesomeIconProps, "icon">;

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

export default function Icon({ icon, ...iconProps }: IconsI) {
  return <FontAwesomeIcon icon={icons[icon]} {...iconProps} />;
}
