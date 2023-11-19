import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ТаблицаMixin
} from '../mixins/regenerated/models/i-i-s-111-таблица';

import РасчетModel from './i-i-s-111-расчет';

let Model = РасчетModel.extend(ТаблицаMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
