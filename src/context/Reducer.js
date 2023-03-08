import { SET_STATE } from './types';

export default (appState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_STATE:
      return {
        ...appState,
        appState: payload,
      };

    default:
      return appState;
  }
};
