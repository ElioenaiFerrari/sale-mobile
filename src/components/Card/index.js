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
  Author,
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
              <Image source={{uri: item.image_url}} />
            </ListHeader>
            <ListContent>
              <Content>{item.description}</Content>
            </ListContent>
            <ListFooter>
              {/* <Author>{item.author.email}</Author> */}
            </ListFooter>
          </ListItem>
        )}
      />
    </Container>
  );
}
