import ShopActionTypes from './shop.types'
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
}
const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true }
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return { ...state, collections: payload, isFetching: false }
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, errorMessage: payload, isFetching: false }
    default:
      return state
  }
}
export default shopReducer
