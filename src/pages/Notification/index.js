import React, {useState, useEffect, useCallback} from 'react';
import {RefreshControl} from 'react-native';
/**
 * Warning is the notices with UCV
 * cash buy
 * re-register
 * pending documents
 * etc...
 */
import {Container, Refresh} from './styles';
import {Warnings} from '../../components';
import api from '../../services/api';
import {getToken} from '../../services/auth';

export default function Notification() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  /**
   * Switch refreshin on false to true
   * after 2 seconds return value to false
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
  /**
   * Loading warnings
   */
  useEffect(() => {
    async function loadFeed() {
      const response = await api.get('/warnings', {
        headers: {
          Authorization: await getToken(),
        },
      });
      const warnings = await response.data;
      setData(warnings);
    }
    loadFeed();
  }, [refreshing]);

  return (
    <Container>
      <Refresh
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={['#eb626b']}
            onRefresh={onRefresh}
          />
        }>
        <Warnings data={data} />
      </Refresh>
    </Container>
  );
}
