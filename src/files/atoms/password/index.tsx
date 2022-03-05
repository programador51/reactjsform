import React from "react";
import usePassword from "./usePassword";
import Icon from "../icons";
import { ThemeProvider } from "styled-components";
// import { themes, ThemesI } from "files/organisms/Form/styles";
import { themes, ThemesI } from "../../organisms/Form/styles";
// import { Themes } from "files/organisms/Form";
import { Themes } from "../../organisms/Form";
import {
  IsRequired,
  BulletValidation,
  ShowPassword,
  PasswordField,
} from "./styles";

export interface onChangePaswordI {
  /**
   * Number of errors in case the required and bulletValidations was passed on the component
   */
  noErrors: number;

  /**
   * Value of the input password typed
   */
  password: string;
}

export interface BulletValidationI {
  /**
   * If the function you pass as argument returns true, it means that the password
   * typed by the user is correct, otherwise has an error
   */
  validationFunction: (passwordText: string) => boolean;

  /**
   * Message to display on the bullet
   */
  message: string;

  /**
   * If true, when the password is correct, the bullet will disappear
   */
  hideOnValid?: boolean;
}

export interface RequiredI {
  /**
   * Indicates if the password is required
   */
  isRequired: boolean;

  /**
   * Message to display in case the password haven't been supplied
   */
  message: string;
}

export interface RInputPasswordProps {
  /**
   * Name attribute of the input
   */
  name?: string;

  theme: keyof ThemesI;

  /**
   * True if a button to show the password typed must me
   */
  showPasswordButton?: boolean;

  /**
   * Class name of the div conainer. Can use styled components
   */
  className?: string;

  /**
   * Label to show
   */
  label: string;

  required?: {
    isRequired: boolean;
    message: string;
  };

  /**
   * Information in order to render bullet validations for the password
   */
  bulletValidations?: BulletValidationI[] | null;

  /**
   * Information of the password when the user types something
   */
  onChange: (object: onChangePaswordI) => void;
}

export default function RInputPassword({
  name = "password",
  label = "No label",
  showPasswordButton = true,
  className = "",
  required = {
    isRequired: false,
    message: "",
  },
  theme = "default",
  bulletValidations = null,
  onChange = () => {},
}: RInputPasswordProps) {
  const { password, handleOnChange, id, toggleShowPassword, showPassword } =
    usePassword({
      isRequired: required.isRequired,
      bulletValidations,
      onChange,
    });

  return (
    <ThemeProvider theme={Themes[theme]}>
      <div className={className}>
        <label htmlFor={id}>
          {label}

          <IsRequired>
            {required.isRequired
              ? password.isValidRequired
                ? null
                : required.message
              : null}
          </IsRequired>
        </label>

        <PasswordField showPassword={showPasswordButton}>
          <input
            id={id}
            type="password"
            name={name}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          {showPasswordButton ? (
            <ShowPassword
              showPassword={showPassword}
              onClick={toggleShowPassword}
            >
              <Icon icon={showPassword ? "eyeSlash" : "eye"} />
            </ShowPassword>
          ) : null}
        </PasswordField>

        {bulletValidations !== null
          ? bulletValidations.map((validation) => {
              const isValid = validation.validationFunction(password.password);

              return isValid ? (
                validation.hideOnValid ? null : (
                  <p>
                    <BulletValidation
                      icon="checkCircle"
                      color={themes[theme].successColor}
                    />
                    <span>{validation.message}</span>
                  </p>
                )
              ) : (
                <p>
                  <BulletValidation
                    icon="timesCircle"
                    color={themes[theme].errorColor}
                  />
                  <span>{validation.message}</span>
                </p>
              );
            })
          : null}
      </div>
    </ThemeProvider>
  );
}
