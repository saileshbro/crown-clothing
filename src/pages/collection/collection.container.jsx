import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import CollectionPage from './collection.component'
const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state),
})
const CollectionPageContainer = connect(mapStateToProps)(CollectionPage)
export default CollectionPageContainer
