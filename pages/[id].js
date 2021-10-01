import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainLayout from '../layout/MainLayout';
import MainHead from '../layout/MainHead';
import SEO from '../constant/seo';
import { getMovie } from '../helpers/fetch';
import { Box, Button, Container, Text, Toast, Navbar, NextLink, BottomNavigation, Footer, Image, EmptyState } from '../ui';
import { useFavoriteDispatch, useFavoriteState } from '../context/favorite';


export default function Slug({ movie }) {
  const {setFavorite} = useFavoriteDispatch();
  const {state} = useFavoriteState();
  const [stateToast, setStateToast] = useState({
    status: false,
    type: 'danger',
    text: '',
    autoCloseDuration: 3000,
  });
  console.log("🚀 ~ file: [id].js ~ line 17 ~ Slug ~ stateToast", stateToast)
  console.log("🚀 ~ file: [id].js ~ line 15 ~ Slug ~ state", state)

  function handleSubmitFavorite(movie){
    setFavorite(
      {
        favorite_items: [movie, ...state.favorite_items]
      }
    );
    handleAddFavorite('success', 'Movie successfully add to your favorite', 3000);
  }

  function closeToast(){
    setStateToast({
      status: false,
      type: '',
      text: '',
      autoCloseDuration: 3000,
    })
  }

  function handleAddFavorite(type, text, autoCloseDuration) {
    setStateToast({
      status: true,
      type: type || 'danger',
      text: text,
      autoCloseDuration: autoCloseDuration
    });
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
          <Box isBlock paddingY={3} customCSS="margin-bottom: 5em;">
            <Text isBlock paddingBottom={2} fontSizeVariant='lg' fontWeightVariant='bold'>{`${movie.Title} - ${movie.Year}`}</Text>
            <Image 
              src={movie.Poster}
              alt={movie.Title}
            />
            <Text isBlock marginTop={2} fontSizeVariant='sm'>Genre: {movie.Genre || '-'}</Text>
            <Text isBlock paddingY={2} fontSizeVariant='md'>{movie.Plot || '-'}</Text>
            <Button onClick={() => handleSubmitFavorite(movie)} colorVariant='primary' isFullWidth isOutlined>
              <Box isBlock>
                <Image 
                  src="/favorite.svg"
                  alt="favorite icon"
                  width={14}
                  height={14}
                  marginRight={1}
                />
                Favorite
              </Box>
            </Button>
          </Box>
        }
      </Container>
      {stateToast && stateToast.status &&
        <Toast type={stateToast.type} autoCloseDuration={stateToast.autoCloseDuration} onClose={closeToast}>
          <Text fontSizeVariant='md' fontWeightVariant='semiBold'>{stateToast.text}</Text>
        </Toast>
      }
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
