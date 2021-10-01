import React from 'react';
import { Box, Navbar, BottomNavigation, Alert} from '../ui';

function MainLayout(props){
  const { 
    isHeader,
    isFooter,

    children,
    q = '',
    filter = '',
    queryParams = '',
  } = props;

  const listBottomNav = [
    {
      id: 0,
      label: 'Home',
      image: '/home.svg',
      link: {
        pathname: '/',
        query: {},
        asPath: '/'
      }
    },
    {
      id: 1,
      label: 'Favorite',
      image: '/favorite.svg',
      link: {
        pathname: '/favorite',
        query: {},
        asPath: '/favorite'
      },
    }
  ];

  return(
    <>
      {isHeader && <Navbar image='/julo-logo.svg' title='the movie' />}
      <>{children}</>
      {isFooter && <BottomNavigation data={listBottomNav} />}
    </>
  )
}

export default MainLayout;
