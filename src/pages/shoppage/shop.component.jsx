import React from 'react'
import './shop.styles.scss'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container'
import CollectionContainer from '../collection/collection.container'

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props
    fetchCollectionStartAsync()
  }
  render() {
    const { match } = this.props

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    )
  }
}

export default connect(null, { fetchCollectionStartAsync })(ShopPage)
