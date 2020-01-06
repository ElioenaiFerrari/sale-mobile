import React from 'react';

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
