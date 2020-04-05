import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'

import { CollectionsOverviewContainer } from './collections-overview.styles'
import { selectCollectionsForOverview } from '../../redux/shop/shop.selectors'
import withSpinner from '../with-spinner/with-spinner.component'

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOverview,
})

export default withSpinner(connect(mapStateToProps)(CollectionsOverview))
