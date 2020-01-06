import React, {useState} from 'react';
import {Animated} from 'react-native';

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
} from './styles';

export default function Card(props) {
  const [zoom, setZoom] = useState();

  return (
    <Container>
      <List
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem>
            <ListHeader>
              <Title>{item.title}</Title>
              <Image source={{uri: item.image}} />
            </ListHeader>
            <ListContent>
              <Content>{item.content}</Content>
            </ListContent>
            <ListFooter />
          </ListItem>
        )}
      />
    </Container>
  );
}
