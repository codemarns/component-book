import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "../../components";

const meta: Meta<typeof Image> = {
  component: Image,
  title: "Components/Image",
  tags: ["autodocs"],
  argTypes: {
    alt: {
      defaultValue: "",
      description: "Defines the alternative text.",
      type: "string",
    },
    src: {
      defaultValue: "",
      description: "Defines the source or url.",
      type: "string",
    },
    thumbnail: {
      defaultValue: "",
      description: "Defines the image initial display before the it appears.",
      type: "string",
    },
    aspectRatio: {
      defaultValue: "4:3",
      description: "Defines the image aspect ratio.",
      options: ["16:9", "8:5", "4:3", "3:2", "1:1"],
      control: { type: "radio" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "forest",
    // src: "sunrise-jungle-min.jpg",
    // thumbnail: "sunrise-jungle.gif",
    src: "sunrise-bali-jungle.jpg",
    thumbnail: "sunrise-bali-jungle.gif",
    aspectRatio: "4:3",
    width: "800px"
  },
};
