import { Serializer as ТаблицаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-111-таблица';
import РасчетSerializer from './i-i-s-111-расчет';

export default РасчетSerializer.extend(ТаблицаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
