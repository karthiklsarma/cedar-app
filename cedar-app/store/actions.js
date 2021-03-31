import * as actions from './actiontypes'
import store from './store'

export const userLogin = (username, password, token) => {
    store.dispatch({
        type: actions.USER_LOGIN,
        payload: {
          username,
          password,
          token
        }
      });
}