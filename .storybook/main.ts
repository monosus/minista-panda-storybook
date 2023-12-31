import type { StorybookConfig } from "@storybook/react-vite"
import path from 'path'
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)","../src/components/**/*.stories.ts"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
	'@storybook/addon-a11y'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@styled-system': path.resolve(__dirname, '../styled-system'),
        '~': path.resolve(__dirname, '../src'),
      }
    }
		return config
	},
	features: {
		// "storyStoreV7": true,
		"buildStoriesJson": true
	  }
}
export default config
