import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "../../utilities";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Utilities/Sidebar",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    layout: "fullscreen",
  },
};
