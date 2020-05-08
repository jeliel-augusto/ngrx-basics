import {createAction, props} from "@ngrx/store";
export const loginAction = createAction(
  '[Auth] Login',
  props<{email: string, password: string}>()
)
export const logoutAction = createAction(
  '[Auth] Logout'
)
export const signUpAction = createAction(
  '[Auth] Sign Up',
  props<{email: string, password: string}>()
)
export const loginSuccess = createAction(
  '[Auth] Login Success'
)
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{error: string}>()
)
export const signUpFailure = createAction(
  '[Auth] Sign Up Failure',
  props<{error: string}>()
)
export const signUpSuccess = createAction(
  '[Auth] Sign Up Success'
)
