import type { Meta, StoryObj } from "@storybook/react";

import { Crud } from "../../utilities";

const meta: Meta<typeof Crud> = {
  component: Crud,
  title: "Utilities/Crud",
  tags: ["autodocs"],
  argTypes: {
    column: {
      defaultValue: 1,
      description: "Component column.",
      control: { type: "number", min: 1, max: 12, step: 1 },
    },
    onChange: { action: "change" },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    column: 1,
  },
};
