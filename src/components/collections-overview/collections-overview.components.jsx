import React from 'react'
import { connect } from 'react-redux'
import './collections-overview.styles.scss'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionsForOverview } from '../../redux/shop/shop.selectors'

const CollectionOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOverview,
})
export default connect(mapStateToProps)(CollectionOverview)
