import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    id: {
      defaultValue: "button",
      description: "Component ID.",
      type: "string",
    },
    label: {
      defaultValue: "Button",
      description: "Component label.",
      type: "string",
    },
    icon: {
      defaultValue: "like",
      description: "Component icon.",
      type: "string",
    },
    disabled: {
      defaultValue: false,
      description: "Component disable state.",
      type: "boolean",
    },
    loading: {
      defaultValue: false,
      description: "Component loading state.",
      type: "boolean",
    },
    layout: {
      defaultValue: "auto",
      description: "Component layouts.",
      options: ["auto", "block"],
      control: { type: "radio" },
    },
    color: {
      defaultValue: "primary",
      description: "Component colors.",
      options: [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "default",
      ],
      control: { type: "select" },
    },
    variant: {
      defaultValue: "solid",
      description: "Component variants.",
      options: ["solid", "outline", "ghost"],
      control: { type: "select" },
    },
    corner: {
      defaultValue: "soft-edge",
      description: "Component border radius.",
      options: ["flat", "soft-edge", "rounded"],
      control: { type: "select" },
    },
    size: {
      defaultValue: "md",
      description: "Component sizes.",
      options: ["sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    type: {
      defaultValue: "button",
      description: "Component type. (Inspect to see the type attributes)",
      options: ["button", "reset", "submit"],
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "button",
    label: "Button",
    icon: "heart",
    layout: "auto",
    type: "button",
    size: "md",
    color: "primary",
    variant: "solid",
    corner: "soft-edge",
    disabled: false,
    loading: false,
  },
};
