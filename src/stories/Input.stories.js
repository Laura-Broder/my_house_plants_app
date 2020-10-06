import React from "react";

import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: "large",
  autoFocus: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
