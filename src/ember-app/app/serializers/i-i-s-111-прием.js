import { Serializer as ПриемSerializer } from
  '../mixins/regenerated/serializers/i-i-s-111-прием';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПриемSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
