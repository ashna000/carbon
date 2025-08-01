/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { test } = require('@playwright/test');
const { themes } = require('../../test-utils/env');
const { snapshotStory } = require('../../test-utils/storybook');

test.describe('TreeView', () => {
  themes.forEach((theme) => {
    test.describe(theme, () => {
      test('treeview @vrt', async ({ page }) => {
        await snapshotStory(page, {
          component: 'TreeView',
          id: 'components-treeview--default',
          theme,
        });
      });

      test('treeview-links @vrt', async ({ page }) => {
        await snapshotStory(page, {
          component: 'TreeView',
          id: 'components-treeview--with-links',
          theme,
        });
      });

      test('treeview with complex nesting @vrt', async ({ page }) => {
        await snapshotStory(page, {
          component: 'TreeView',
          id: 'components-treeview--with-complex-nesting',
          theme,
        });
      });
    });
  });
});
