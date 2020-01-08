import React, {useState, useEffect, useCallback} from 'react';

// styles
import {Container, Refresh} from './styles';
// Components
import {Card, Courses} from '../../components';
import api from '../../services/api';
import {useSelector} from 'react-redux';
import {RefreshControl} from 'react-native';

export default function Main() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const users = useSelector(state => state.users);

  /**
   * Wait the time and refresh in 2 seconds
   */
  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  /**
   * Set refresh to true and refresh your feed
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  /**
   * Loading the feed
   */
  useEffect(() => {
    async function loadFeed() {
      const response = await api.get('/posts', {
        headers: {Authorization: `Bearer ${users.token}`},
      });

      const feed = await response.data;

      setData(feed);
    }
    loadFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshing]);

  return (
    <Container>
      <Courses />
      <Refresh
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Card data={data} />
      </Refresh>
    </Container>
  );
}
