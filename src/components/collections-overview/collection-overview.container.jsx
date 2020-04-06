import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import collectionsOverview from './collections-overview.component'
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})
const CollectionsOverviewContainer = connect(mapStateToProps)(
  collectionsOverview,
)
export default CollectionsOverviewContainer
