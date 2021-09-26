import React from 'react';
import { Navbar, BottomNavigation } from '../ui';

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
      link: '/'
    },
    {
      id: 1,
      label: 'Search',
      image: '/search.svg',
      link: '/search'
    },
    {
      id: 2,
      label: 'Favorite',
      image: '/favorite.svg',
      link: '/favorite'
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
