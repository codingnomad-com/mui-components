import { expect, test } from '@playwright/experimental-ct-react';
import React from 'react';
import { Grid } from './Grid';
import { GridItem } from './GridItem';

test(`renders 3 items"`, async ({ mount }) => {
  const component = await mount(
    <Grid>
      <GridItem>Test</GridItem>

      <GridItem>Test</GridItem>

      <GridItem>Test</GridItem>
    </Grid>,
  );

  await expect(component).toContainText('Test');
});
