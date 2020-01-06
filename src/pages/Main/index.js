import React from 'react';

import {Container} from './styles';
import Card from '../../components/Card';

export default function Main() {
  const data = [
    {
      id: Math.random() * 30,
      title: 'Jornalismo',
      content: 'Vagas abertas para 2020/1',
      image:
        'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: Math.random() * 30,
      title: 'Mídias digitais',
      content: 'Descubra agora se você se enquadra no perfil',
      image:
        'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: Math.random() * 30,
      title: 'Academia',
      content: 'Fechada por causa do alagamento',
      image:
        'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: Math.random() * 30,
      title: 'Atletismo',
      content: 'Novos recordes dentro da faculdade ',
      image:
        'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: Math.random() * 30,
      title: 'Sistemas',
      content: 'Novo sistema da católica está previsto para Julho de 2020',
      image:
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ];
  return (
    <Container>
      <Card data={data} />
    </Container>
  );
}
