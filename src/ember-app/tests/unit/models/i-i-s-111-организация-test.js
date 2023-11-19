import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-111-организация', 'Unit | Model | i-i-s-111-организация', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-111-график',
    'model:i-i-s-111-должности',
    'model:i-i-s-111-организация',
    'model:i-i-s-111-подразделения',
    'model:i-i-s-111-прием',
    'model:i-i-s-111-расчет',
    'model:i-i-s-111-сотрудник',
    'model:i-i-s-111-таблица',
    'model:i-i-s-111-увольнение',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
