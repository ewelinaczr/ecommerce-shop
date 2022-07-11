import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCurrentUser = (user) =>
// returns action object {type, paylaod}
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
