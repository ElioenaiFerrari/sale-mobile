import React from 'react';

// styles
import {Container, Refresh} from './styles';
// Components
import {Card} from '../../components';
import api from '../../services/api';
/**
 * Refresh control
 */
import {RefreshControl} from 'react-native';
import {getToken, onSignedOut} from '../../services/auth';

export default function Main(props) {
  /**
   * The data consult a database and your table items
   */
  const [data, setData] = React.useState([]);
  /**
   * Refreshing is state
   * on true => refresh feed
   * on false => refresh complete
   */
  const [refreshing, setRefreshing] = React.useState(false);
  /**
   * swap pick on screen to down => refresh feed
   * Wait the time and refresh feed in 2 seconds
   */
  function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  /**
   * Set refresh to true and after two seconds to false
   */
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  /**
   * Loading the feed data
   */
  React.useEffect(
    React.useCallback(() => {
      async function loadFeed() {
        /**
         * Save the JWT token on localStorage to consult after
         * and authenticate headers with axios in API
         */

        /**
         * Authentication JWT, and return the data on GET /posts
         */
        const {data} = await api.get('/posts', {
          headers: {Authorization: await getToken()},
        });

        setData(data);
      }
      loadFeed();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshing]),
  );

  return (
    <Container>
      {/*
        Courses is a picker
        Have all courses of UCV
      */}
      <Refresh
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={['#eb626b']}
            onRefresh={onRefresh}
          />
        }>
        <Card data={data} />
      </Refresh>
    </Container>
  );
}
