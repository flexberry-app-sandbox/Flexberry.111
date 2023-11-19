import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  заработок_год: DS.attr('number'),
  пособие: DS.attr('number'),
  срзаработок: DS.attr('number')
});

export let ValidationRules = {
  заработок_год: {
    descriptionKey: 'models.i-i-s-111-таблица.validations.заработок_год.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пособие: {
    descriptionKey: 'models.i-i-s-111-таблица.validations.пособие.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  срзаработок: {
    descriptionKey: 'models.i-i-s-111-таблица.validations.срзаработок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-111-расчет'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТаблицаE', 'i-i-s-111-таблица', {
    пособие: attr('Пособие', { index: 0 })
  });

  modelClass.defineProjection('ТаблицаL', 'i-i-s-111-таблица', {
    пособие: attr('Пособие', { index: 0 })
  });
};
