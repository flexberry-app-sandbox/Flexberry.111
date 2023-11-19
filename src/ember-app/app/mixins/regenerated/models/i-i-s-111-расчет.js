import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDорганизации: DS.attr('number'),
  iDрасчета: DS.attr('number'),
  iDсотрудника: DS.attr('number'),
  период_болезни: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-111-организация', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-111-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDорганизации: {
    descriptionKey: 'models.i-i-s-111-расчет.validations.iDорганизации.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDрасчета: {
    descriptionKey: 'models.i-i-s-111-расчет.validations.iDрасчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  iDсотрудника: {
    descriptionKey: 'models.i-i-s-111-расчет.validations.iDсотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  период_болезни: {
    descriptionKey: 'models.i-i-s-111-расчет.validations.период_болезни.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-111-расчет.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-111-расчет.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетE', 'i-i-s-111-расчет', {
    
  });

  modelClass.defineProjection('РасчетL', 'i-i-s-111-расчет', {
    
  });
};
