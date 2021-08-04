import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  type: "email",
  id: "email",
  placeholder: "Email",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  id: "password",
  placeholder: "Password",
};
