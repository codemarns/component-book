import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "../../utilities";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Utilities/Sidebar",
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      defaultValue: "minimize",
      description: "Sidebar appearance.",
      options: ["minimize", "hide"],
      control: "radio",
    },
    transition: {
      defaultValue: "move along",
      description: "Sidebar transition for mobile responsiveness. You can check the effects on screen below 1024 pixels.",
      options: ["move along", "overlay"],
      control: "radio",
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: "minimize",
    transition: "move along",
  },
  parameters: {
    layout: "fullscreen",
  },
};
