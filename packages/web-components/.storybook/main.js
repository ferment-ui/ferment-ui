import { dirname, join } from "path";
/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials")],
  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
