import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
/**
 * The card is a containers in your feed of notices
 * contain id, title, image_url and description
 *
 * Styles
 */
import {
  Container,
  List,
  ListItem,
  ListHeader,
  Title,
  Image,
  ListContent,
  Content,
  ListFooter,
  Modal,
  ContentContainer,
} from './styles';
import {lightColor} from '../../colors';
import api from '../../services/api';
import {getToken} from '../../services/auth';

/**
 * data is a response of API
 */
export default function Card(props) {
  const [visible, setVisible] = useState(false);
  const [info, setInfo] = useState({});

  async function show(id) {
    const {data} = await api.get(`/posts/${id}`, {
      headers: {Authorization: await getToken()},
    });

    setInfo(data);
  }
  return (
    <Container>
      <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
        onRequestClose={() => setVisible(false)}>
        <ContentContainer>
          <Icon
            name="keyboard-arrow-down"
            size={35}
            onPress={() => setVisible(false)}
            style={{marginBottom: 30, alignSelf: 'flex-end'}}
            color={lightColor}
          />
          <Title>{info.title}</Title>
          <Content>{info.description}</Content>
        </ContentContainer>
      </Modal>
      <List
        /**
         * data here
         */
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem
            onPress={() => {
              setVisible(true);
              show(item.id);
            }}>
            <ListHeader>
              <Title>{item.title}</Title>
              <Image source={{uri: item.image_url}} />
            </ListHeader>
            <ListFooter>
              {/* <Author>{item.author.email}</Author> */}
            </ListFooter>
          </ListItem>
        )}
      />
    </Container>
  );
}
