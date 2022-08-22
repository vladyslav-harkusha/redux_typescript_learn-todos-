import * as UsersActionCreators from './users';
import * as TodosActionCreators from './todos';

export default {
  ...TodosActionCreators,
  ...UsersActionCreators,
};