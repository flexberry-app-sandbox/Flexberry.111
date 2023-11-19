import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ТаблицаMixin
} from '../mixins/regenerated/models/i-i-s-111-таблица';

import РасчетModel from './i-i-s-111-расчет';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-111-расчет';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = РасчетModel.extend(ТаблицаMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
