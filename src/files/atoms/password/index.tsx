import React, { useContext } from "react";
import { useFormContext } from "react-hook-form";
import usePassword from "./usePassword";
import Icon from "../icons";
import { ThemeContext } from "styled-components";
import { ThemeI } from "files/organisms/Form/styles";
import {
  IsRequired,
  BulletValidation,
  ShowPassword,
  PasswordField,
} from "./styles";

export interface RInputPasswordAtLeastI {
  /**
   * Character to evaluate
   */
  character: string | RegExp;

  /**
   * Message to show in case it's wrong
   */
  message: string;

  /**
   * Indicates if that particular validations it's ok
   */
  isValid?: boolean;
}

export interface RInputPasswordProps {
  /**
   * Name attribute of the input
   */
  name?: string;

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
   * Min length of characters in order to be valid
   */
  min?: {
    /**
     * Minimum characters to be valid
     */
    length: number;
    /**
     * "Message to display in case the validation its wrong"
     */
    message: string;
  };

  max?: {
    /**
     * Max characters allowed to type on input
     */
    legth: number | null;

    /**
     * Message to display on the bullet error
     */
    message: string;
  };

  atLeast?: RInputPasswordAtLeastI[] | null;

  /**
   * When validation bullets are correct, hide them
   */
  hideOnValid?: boolean;
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
  hideOnValid = true,
  min = {
    length: 8,
    message: "Minimum 8 characters",
  },
  max = {
    legth: null,
    message: "",
  },
  atLeast = null,
}: RInputPasswordProps) {
  const { register } = useFormContext();

  const { errorColor, successColor }: ThemeI = useContext(ThemeContext);

  const { password, handleOnChange, id, toggleShowPassword, showPassword } =
    usePassword({
      min,
      max: max.legth,
      atLeast,
      isRequired: required.isRequired,
    });

  return (
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
          {...register(name)}
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

      {hideOnValid && password.isValidMin ? null : (
        <p>
          <BulletValidation
            color={password.isValidMin ? successColor : errorColor}
            icon={password.isValidMin ? "checkCircle" : "timesCircle"}
          />
          {min.message}
        </p>
      )}

      {hideOnValid && password.isValidMax ? null : max.legth !== null ? (
        <p>
          <BulletValidation
            color={password.isValidMax ? successColor : errorColor}
            icon={password.isValidMax ? "checkCircle" : "timesCircle"}
          />
          {max.message}
        </p>
      ) : null}

      {password.atLeast.errors.map((element: any) => (
        <>
          {hideOnValid && element.isValid ? null : (
            <p>
              <BulletValidation
                icon={element.isValid ? "checkCircle" : "timesCircle"}
                color={element.isValid ? successColor : errorColor}
              />
              <span>{element.message}</span>
            </p>
          )}
        </>
      ))}
    </div>
  );
}
