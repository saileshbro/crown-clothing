import ShopActionTypes from './shop.types'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})
export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
})
export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})
export const fetchCollectionStartAsync = () => async dispatch => {
  const collectionRef = firestore.collection('collections')
  dispatch(fetchCollectionStart())
  try {
    const snapshot = await collectionRef.get()
    dispatch(fetchCollectionsSuccess(convertCollectionsSnapshotToMap(snapshot)))
  } catch (error) {
    dispatch(fetchCollectionsFailure(error.message))
  }
}
