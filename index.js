'use strict';

module.exports = {
  name: 'ember-power-calendar-luxon',
  /**
   * This method tries to rename the import path of the addon from
   * `ember-power-calendar-luxon` to `ember-power-calendar-util`.
   * This "agnostic" import path should make easy to swap this addon
   * by another one that exposes the same API from the same import path.
   */
  treeForAddon(tree) {
    const Funnel = require('broccoli-funnel');

    let namespacedTree = new Funnel(tree, {
      srcDir: '/',
      destDir: `/ember-power-calendar-utils`,
      annotation: `Addon#treeForVendor (${this.name})`,
    });

    return this.preprocessJs(
      namespacedTree,
      '/',
      'ember-power-calendar-utils',
      {
        registry: this.registry,
      }
    );
  },
};
