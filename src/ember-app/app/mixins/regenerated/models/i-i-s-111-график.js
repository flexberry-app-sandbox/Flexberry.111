import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDсотрдника: DS.attr('number'),
  во_часов: DS.attr('number'),
  дата: DS.attr('date'),
  причина: DS.attr('string'),
  явка: DS.attr('boolean'),
  сотрудник: DS.belongsTo('i-i-s-111-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDсотрдника: {
    descriptionKey: 'models.i-i-s-111-график.validations.iDсотрдника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  во_часов: {
    descriptionKey: 'models.i-i-s-111-график.validations.во_часов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-111-график.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  причина: {
    descriptionKey: 'models.i-i-s-111-график.validations.причина.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  явка: {
    descriptionKey: 'models.i-i-s-111-график.validations.явка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-111-график.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикE', 'i-i-s-111-график', {
    iDсотрдника: attr('I dсотрдника', { index: 0 })
  });

  modelClass.defineProjection('ГрафикL', 'i-i-s-111-график', {
    iDсотрдника: attr('I dсотрдника', { index: 0 })
  });
};
