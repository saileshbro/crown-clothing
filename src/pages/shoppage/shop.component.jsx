import React from 'react'
import './shop.styles.scss'

import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { updateCollection } from '../../redux/shop/shop.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
class ShopPage extends React.Component {
  state = {
    loading: true,
  }
  unsubscribeFromSnapshot = null
  componentDidMount() {
    const { updateCollection } = this.props
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      updateCollection(convertCollectionsSnapshotToMap(snapshot))
      console.log(convertCollectionsSnapshotToMap(snapshot))
      this.setState({ loading: false })
    })
  }
  render() {
    const { match } = this.props
    const { loading } = this.state

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => {
            console.log(props)
            return <CollectionsOverview isLoading={loading} {...props} />
          }}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPage isLoading={loading} {...props} />}
        />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  updateCollection: collectionsMap =>
    dispatch(updateCollection(collectionsMap)),
})
export default connect(null, mapDispatchToProps)(ShopPage)
