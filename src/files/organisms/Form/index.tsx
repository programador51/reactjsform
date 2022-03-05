import RInputPassword from "files/atoms/password";
import { useForm, FormProvider } from "react-hook-form";
import { ThemeProvider } from "styled-components";
import { themes, ThemesI } from "./styles";

export const Themes = {
  default: themes.default,
};

export interface RInputFormProps {
  children: JSX.Element | JSX.Element[] | string;
  useFormProps?: object | null | any;
  theme?: keyof ThemesI;
  onSubmit?: any;
}

export function RInputForm({
  children,
  useFormProps = null,
  theme = "default",
  onSubmit = null,
}: RInputFormProps) {
  const methods = useForm(useFormProps);

  return (
    <ThemeProvider theme={Themes[theme]}>
      <FormProvider {...methods}>
        <form
          noValidate
          onSubmit={methods.handleSubmit(
            (data) => onSubmit(data),
            (errors, event) => onSubmit(errors, event)
          )}
        >
          {children}
        </form>
      </FormProvider>
    </ThemeProvider>
  );
}

RInputForm.Password = RInputPassword;
