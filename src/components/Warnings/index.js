import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, List, ListItem, Description} from './styles';
/**
 * Warnings is a Cards components
 * Show the various warnigs on feed
 */
export default function Warnings(props) {
  return (
    <Container>
      <List
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem>
            <Icon name="warning" size={30} color="#eb626b" />
            <Description>{item.description}</Description>
          </ListItem>
        )}
      />
    </Container>
  );
}
