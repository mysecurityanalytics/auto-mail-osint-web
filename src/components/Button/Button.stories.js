import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  type: "submit",
  buttonType: "btn",
};

export const Success = Template.bind({});
Success.args = {
  text: "Success",
  type: "submit",
  buttonType: "btn btn-success",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Danger",
  type: "submit",
  buttonType: "btn btn-danger",
};

export const Large = Template.bind({});
Large.args = {
  text: "Large",
  type: "submit",
  buttonType: "btn btn-lg",
};

Large.storyName = "Large Button";
