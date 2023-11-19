import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-111-расчет', 'Unit | Serializer | i-i-s-111-расчет', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-111-расчет',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
