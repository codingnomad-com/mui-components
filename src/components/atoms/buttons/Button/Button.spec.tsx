// @ts-check

import { expect, test } from '@playwright/experimental-ct-react';
import React from 'react';
import Button from './Button';

const buttonLabel = 'I am a button';

test(`has label "${buttonLabel}"`, async ({ mount }) => {
  // Mount a component. Returns locator pointing to the component.
  const component = await mount(<Button label={buttonLabel} />);

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText(buttonLabel);
});

// TODO: Fix click test
test('click fires callback', async ({ mount }) => {
  let clicked = false;

  // Mount a component. Returns locator pointing to the component.
  const component = await mount(
    <Button
      label={buttonLabel}
      onClick={() => {
        clicked = true;
      }}
    />,
  );

  console.log('clicked before', clicked);
  // Perform locator click. This will trigger the event.
  await component.click({ force: true });
  console.log('clicked after', clicked);

  // Assert that respective events have been fired.
  expect(clicked).toBeTruthy();
});
