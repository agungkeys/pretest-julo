import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainLayout from '../layout/MainLayout';
import MainHead from '../layout/MainHead';
import SEO from '../constant/seo';
import { getMovie } from '../helpers/fetch';
import { Box, Button, Container, Text, Navbar, NextLink, BottomNavigation, Footer, Image, EmptyState } from '../ui'


export default function Slug({ movie }) {
  function handleSubmitFavorite(movie){
    console.log('add to favorite', movie)
  }
  return (
    <MainLayout isHeader isFooter> 
      <MainHead seo={SEO.DEFAULT} />
      <Container customCSS='background: #fff;'>
        {movie.Response === 'False' ? 
          <EmptyState
            image='/cinema.svg'
            title='The Movie is Not found'
            btnLabel='Find Movies'
            btnLink='/'
          />
          :
          <Box isBlock paddingY={3} marginBottom={3}>
            <Text isBlock paddingBottom={2} fontSizeVariant='lg' fontWeightVariant='bold'>{`${movie.Title} - ${movie.Year}`}</Text>
            <Image 
              src={movie.Poster}
              alt={movie.Title}
            />
            <Text isBlock marginTop={2} fontSizeVariant='sm'>Genre: {movie.Genre || '-'}</Text>
            <Text isBlock paddingY={2} fontSizeVariant='md'>{movie.Plot || '-'}</Text>
            <Button onClick={() => handleSubmitFavorite(movie)} colorVariant='danger_light' isFullWidth>Favorite</Button>
          </Box>
        }
      </Container>
    </MainLayout>
  )
}

export async function getServerSideProps({params}) {
  const { id } = params;
  const movie = await getMovie(id);

  return {
    props: {
      movie
    }
  }
}
