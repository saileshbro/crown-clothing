import UserActionTypes from './user/user.types'

export const setCurrentUser = user => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
})
