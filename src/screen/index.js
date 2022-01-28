import React from 'react';
import '../component/styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddressCard } from '../component/address';
import CarouselCard from '../component/carousel';
import { ButtonCard } from '../component/button';
import { Card } from '../component/card';
import '../component/jquery/hide-show-nav';

export const indexScreen = () => {
  return (
    <div>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      ></meta>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      ></link>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
      ></link>

      <header className='fixed-top header '>
        <AddressCard />
        <CarouselCard />
      </header>
      <ButtonCard />
      <Card />
    </div>
  );
};
