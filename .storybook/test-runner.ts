
import { injectAxe, checkA11y } from 'axe-playwright';

import type { TestRunnerConfig } from '@storybook/test-runner';

// import { toMatchImageSnapshot } from 'jest-image-snapshot'

/*
 * See https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental
 * to learn more about the test-runner hooks API.
 */
const a11yConfig: TestRunnerConfig = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page) {
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

// const snapShotsConfig: TestRunnerConfig = {
// 	setup: () => {
// 	  expect.extend({ toMatchImageSnapshot })
// 	},
// 	postRender: async (page, context) => {
// 	  // Add a post-render delay in case page is still animating
// 	  await new Promise((resolve) => setTimeout(resolve, 500))
// 	  const screenshot = await page.screenshot()
// 	  expect(screenshot).toMatchImageSnapshot({})
// 	},
//   }
// 両方のテストを実行する場合は、以下のように書く
const config: TestRunnerConfig = {
  ...a11yConfig,
//   ...snapShotsConfig,
};
module.exports = config;
