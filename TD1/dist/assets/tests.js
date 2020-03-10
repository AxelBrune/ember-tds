'use strict';

define("td1c/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/ex1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/ex1.js should pass ESLint\n\n');
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
  QUnit.test('utils/note-class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/note-class.js should pass ESLint\n\n');
  });
});
define("td1c/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('td1c/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'td1c/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('td1c/templates/ex1.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'td1c/templates/ex1.hbs should pass TemplateLint.\n\ntd1c/templates/ex1.hbs\n  3:4  error  Incorrect indentation for `<h3>` beginning at L3:C4. Expected `<h3>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<Textarea>` beginning at L4:C4. Expected `<Textarea>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `<button>` beginning at L5:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:4  error  Incorrect indentation for `<button>` beginning at L6:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:4  error  Incorrect indentation for `Nombre de caract\xE8res restants : ` beginning at L8:C4. Expected `Nombre de caract\xE8res restants : ` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:0  error  Incorrect indentation for `<div>` beginning at L13:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  1:5  error  elements cannot have inline styles  no-inline-styles\n  5:12  error  elements cannot have inline styles  no-inline-styles\n  6:12  error  elements cannot have inline styles  no-inline-styles\n');
  });
});
define("td1c/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/ex1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/ex1-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/ex1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ex1-test.js should pass ESLint\n\n');
  });
});
define("td1c/tests/test-helper", ["td1c/app", "td1c/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("td1c/tests/unit/controllers/ex1-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | ex1', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:ex1');
      assert.ok(controller);
    });
  });
});
define("td1c/tests/unit/routes/ex1-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | ex1', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:ex1');
      assert.ok(route);
    });
  });
});
define('td1c/config/environment', [], function() {
  var prefix = 'td1c';
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

require('td1c/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
