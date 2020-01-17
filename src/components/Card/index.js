import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
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

/**
 * Create animated icon
 */
const AnimatableIcon = Animatable.createAnimatableComponent(Icon);

const Card = React.memo(props => {
  const IconRef = React.useRef();
  const ModalRef = React.useRef();

  const [visible, setVisible] = React.useState(false);
  const [info, setInfo] = React.useState({});
  const [isFavorite, setIsFavorite] = React.useState(false);

  /**
   * This function shower notice if you click
   * The modal turn open
   */
  async function show(id) {
    const {data} = await api.get(`/posts/${id}`, {
      headers: {Authorization: await getToken()},
    });

    setInfo(data);
  }
  return (
    <Container>
      {/*
        Modal shows card on the click feed notice.
        contains informations for a selected notice.
      */}
      <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onRequestClose={React.useCallback(() => setVisible(false), [visible])}>
        <ContentContainer useNativeDriver ref={ModalRef}>
          {/*
            Icon arrow down
            close the modal
          */}
          <Icon
            name="keyboard-arrow-down"
            size={35}
            // eslint-disable-next-line react-hooks/exhaustive-deps
            onPress={React.useCallback(() => {
              ModalRef.current.fadeOutDownBig();
              setTimeout(() => {
                setVisible(false);
              }, 500);
            }, [])}
            style={{alignSelf: 'flex-end'}}
            color={lightColor}
          />
          {/*
            Icon star
            Favorite the notice
          */}
          <AnimatableIcon
            ref={IconRef}
            name={isFavorite ? 'star' : 'star-border'}
            size={35}
            useNativeDriver
            onPress={React.useCallback(() => {
              setIsFavorite(!isFavorite);
              IconRef.current.tada();
            }, [isFavorite])}
            style={{marginBottom: 30, marginTop: -30, alignSelf: 'flex-start'}}
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
          </ListItem>
        )}
      />
    </Container>
  );
});

export default Card;
