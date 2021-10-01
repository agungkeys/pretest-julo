import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainLayout from '../layout/MainLayout';
import MainHead from '../layout/MainHead';
import SEO from '../constant/seo';
import { Box, Button, Container, Text, NextLink, MovieCard, EmptyState } from '../ui';
import { useFavoriteDispatch, useFavoriteState } from '../context/favorite';

function Favorite() {
  const { state }  = useFavoriteState();
  const [stateFavorite, setStateFavorite] = useState();

  useEffect(() => {
    if(state && state.favorite_items && state.favorite_items.length){
      setStateFavorite(state.favorite_items);
    }
  }, [state]);

  console.log("🚀 ~ file: favorite.js ~ line 13 ~ Favorite ~ stateFavorite", stateFavorite)

  return (
    <MainLayout isHeader isFooter> 
      <MainHead seo={SEO.DEFAULT} />
      <Container customCSS='background: #fff;'>
        <Box isBlock paddingY={3}>
          <Text fontSizeVariant='lg' fontWeightVariant='bold'>Favorite Movies</Text>
        </Box>
        {
          stateFavorite && 
          stateFavorite.map((item, key) => (
            <Box key={`${item.imdbID}-${key}`}>
              <MovieCard
                id={item.imdbID}
                title={item.Title}
                image={item.Poster}
                category={item.Type}
                release={item.Year}
                link={{
                  pathname: `/${item.imdbID}`,
                  query: {},
                  asPath: `/${item.imdbID}`
                }}
              />
            </Box>
          ))
          || 
          <Box padding={8}>
            <EmptyState
              image='/cinema.svg'
              title='Your favorite movies is empty'
              btnLabel='Find Movies'
              btnLink='/'
            />
          </Box>
        }
        
      </Container>
    </MainLayout>
  )
}


export default Favorite;