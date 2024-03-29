import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections,
)
export const selectCollectionsForOverview = createSelector(
  [selectCollections],
  collections => (collections ? Object.values(collections) : []),
)
export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null,
  )
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching,
)
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  snop => !!snop.collections,
)
