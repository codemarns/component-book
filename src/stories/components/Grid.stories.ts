import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "../../components";

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "Components/Grid",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
