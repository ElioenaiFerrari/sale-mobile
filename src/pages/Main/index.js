import React, {useState, useEffect} from 'react';

// styles
import {Container} from './styles';
// Components
import {Card, Courses} from '../../components';
import api from '../../services/api';
import {useSelector} from 'react-redux';

export default function Main() {
  const users = useSelector(state => state.users);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      const response = await api.get('/posts', {
        headers: {Authorization: `Bearer ${users.token}`},
      });

      const feed = await response.data;

      setData([...data, ...feed]);
    }
    loadFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Courses />
      <Card data={data} />
    </Container>
  );
}
