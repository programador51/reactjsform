// import RInputPassword from "files/atoms/password";
import { RInputForm } from "files/organisms/Form";
import { schemaLogin } from "files/schemas/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { themes } from "files/organisms/Form/styles";
import { Password } from "files/atoms/password/styles";
import { Button } from "files/atoms/button/styles";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RInputPassword, { RInputPasswordProps } from "files/atoms/password";

export default {
  title: "Inputs/Password",
  component: RInputPassword,
  argTypes: {
    theme: {
      description: "Style that will have then form when it renders",
      defaultValue: {
        summary: themes.default,
      },
    },

    showPasswordButton: {
      description:
        "Display a button that reveals the password typed by the user",
      defaultValue: {
        summary: true,
      },
      control: "boolean",
    },

    /**
     * Indicates if the bullet validations should hide when this ones
     * are valid
     */
    hideOnValid: {
      description:
        "Indicates if the bullet validations should hide when this ones are valid",
      defaultValue: {
        summary: false,
      },
      control: "boolean",
    },

    max: {
      description: "Indicates the max characters allowed to type",
      defaultValue: {
        summary: JSON.stringify({ legth: null, message: "" }, null, 5),
      },
    },

    min: {
      description: "Indicates the min characters that the password must have",
      defaultValue: {
        summary: JSON.stringify({ legth: null, message: "" }, null, 5),
      },
    },

    atLeast: {
      description: "Regex expression in order to add more bullet validations",
      defaultValue: {
        summary: "null",
      },
    },

    required: {
      description:
        "Indicates if the password it's required and adds on the right side of the label input",
      defaultValue: {
        summary: JSON.stringify(
          {
            isRequired: false,
            message: "",
          },
          null,
          5
        ),
      },
    },

    label: {
      description: "Label to display for the input password",
      defaultValue: {
        summary: "No label",
      },
    },
  },
} as ComponentMeta<typeof RInputPassword>;

const Template: ComponentStory<typeof RInputPassword> = (args) => (
  <RInputForm theme="default" onSubmit={(data: number) => console.log(data)}>
    <RInputPassword {...args} />
    <Button variant="default">Guardar</Button>
  </RInputForm>
);

export const JustPassword = Template.bind({});
JustPassword.args = {
  showPasswordButton: true,
  hideOnValid: false,
  label: "Password",
  required: {
    isRequired: true,
    message: "*",
  },
  min: {
    length: 8,
    message: "At least 8 characters",
  },
  max: {
    legth: 10,
    message: "Max 10 characters",
  },
  atLeast: [
    {
      character: `([+@#$_!])`,
      message: "At least on of this characters: @,#,$,_,!",
    },
  ],
};

// {
//   character: "@",
//   message: "Al menos una arroba",
// },
// {
//   character: "#",
//   message: "Al menos un #",
// },
