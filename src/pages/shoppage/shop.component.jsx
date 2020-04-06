import React from 'react'
import './shop.styles.scss'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { connect } from 'react-redux'
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { createStructuredSelector } from 'reselect'
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors'
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props
    fetchCollectionStartAsync()
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => {
            console.log(props)
            return (
              <CollectionsOverview
                isLoading={isCollectionFetching}
                {...props}
              />
            )
          }}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPage isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
})
export default connect(mapStateToProps, { fetchCollectionStartAsync })(ShopPage)
