'use strict';

define("td2/tests/integration/components/multi-select-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | multi-select', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WseO13T8",
        "block": "{\"symbols\":[],\"statements\":[[5,\"multi-select\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "uxUpQYpD",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"multi-select\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("td2/tests/integration/helpers/array-contains-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | array-contains', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "dSC0l7/l",
        "block": "{\"symbols\":[],\"statements\":[[1,[28,\"array-contains\",[[24,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("td2/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/multi-select.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/multi-select.js should pass ESLint\n\n23:7 - Use closure actions (ember/closure-actions)');
  });
  QUnit.test('controllers/ex1-controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/ex1-controller.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/array-contains.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/array-contains.js should pass ESLint\n\n2:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/ex1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ex1.js should pass ESLint\n\n');
  });
  QUnit.test('routes/ex1/step1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ex1/step1.js should pass ESLint\n\n');
  });
  QUnit.test('utils/listes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/listes.js should pass ESLint\n\n');
  });
});
define("td2/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('td2/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'td2/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('td2/templates/components/multi-select.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'td2/templates/components/multi-select.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('td2/templates/ex1.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'td2/templates/ex1.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('td2/templates/ex1/step1.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'td2/templates/ex1/step1.hbs should pass TemplateLint.\n\ntd2/templates/ex1/step1.hbs\n  1:29  error  elements cannot have inline styles  no-inline-styles\n');
  });
});
define("td2/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/multi-select-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/multi-select-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/array-contains-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/array-contains-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/ex1-controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/ex1-controller-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/ex1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ex1-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/ex1/step1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ex1/step1-test.js should pass ESLint\n\n');
  });
});
define("td2/tests/test-helper", ["td2/app", "td2/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("td2/tests/unit/controllers/ex1-controller-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | ex1-controller', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:ex1-controller');
      assert.ok(controller);
    });
  });
});
define("td2/tests/unit/routes/ex1-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | ex1', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:ex1');
      assert.ok(route);
    });
  });
});
define("td2/tests/unit/routes/ex1/step1-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | ex1/step1', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:ex1/step1');
      assert.ok(route);
    });
  });
});
define('td2/config/environment', [], function() {
  var prefix = 'td2';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('td2/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
