import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  List,
  ListItem,
  Description,
  LeftView,
  LeftViewText,
} from './styles';

import Swipeable from 'react-native-gesture-handler/Swipeable';
/**
 * Warnings is a Cards components
 * Show the various warnigs on feed
 */
export default function Warnings(props) {
  /**
   * On swipe warning to left
   * call this function
   */
  const LeftActions = () => {
    return (
      <LeftView>
        <LeftViewText>Concluir</LeftViewText>
      </LeftView>
    );
  };
  return (
    <Container>
      <List
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Swipeable renderLeftActions={LeftActions}>
            <ListItem>
              <Icon name="warning" size={30} color="#eb626b" />
              <Description numberOfLines={10}>{item.description}</Description>
            </ListItem>
          </Swipeable>
        )}
      />
    </Container>
  );
}
