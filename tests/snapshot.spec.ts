import { test, expect } from '@playwright/test';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';

interface Story {
  id: string;
  name: string;
  title: string;
}
interface Data {
  stories: Record<string, Story>;
}

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const storybookDir = resolve(_dirname, '..', 'storybook-static');
const data: Data = JSON.parse(readFileSync(resolve(storybookDir, 'stories.json')).toString());
test.describe.parallel('visual regression testing', () => {
  Object.values(data.stories).forEach((story) => {
    test(`snapshot test ${story.title}: ${story.name}`, async ({ page }) => {
      await page.goto(`http://localhost:6006/iframe.html?id=${story.id}`, { waitUntil: 'networkidle' });
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot([story.title, `${story.id}.png`]);
    });
  });
});
