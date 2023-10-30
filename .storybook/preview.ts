import type { Preview } from "@storybook/react";
import "../src/index.css";
import "../src/assets/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Welcome", "Design System", "Components", "Utilities", "*"],
      },
    },
  },
};

export default preview;
