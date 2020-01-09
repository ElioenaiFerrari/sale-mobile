import React from 'react';
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
} from './styles';

/**
 * data is a response of API
 */
export default function Card(props) {
  return (
    <Container>
      <List
        /**
         * data here
         */
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
