import { combineReducers, createAction, Middleware } from '@reduxjs/toolkit';
import browserHistory from "../browser-history/browser-history";
import appDataReducer from './reducer';


export enum middleware {
  RedirectToRoute = 'app/redirectToRoute',
}

export enum AppRoute {
  Main = '/',
  List = '/list',
  Form = 'form',
}


export const redirect: Middleware<unknown, State> =
  (_store) => (next) => (action) => {
    if (action.type === middleware.RedirectToRoute) {
      browserHistory.push(action.payload);
    }
    return next(action);
  };


export const redirectToRoute = createAction(
  middleware.RedirectToRoute,
  (url: AppRoute) => ({ payload: url }));


export const RootReducer = combineReducers({
  "Data": appDataReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export type State = RootState;
