import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainLayout from '../layout/MainLayout';
import MainHead from '../layout/MainHead';
import SEO from '../constant/seo';
import { getMovies } from '../helpers/fetch';
import { Box, Button, Container, Row, Col, Text, Image, Footer, InfiniteScroll, MovieCard } from '../ui'

function Home({ movies }) {
  const [stateMovies, setStateMovies] = useState(movies);
  const [stateListMovies, setStateListMovies] = useState(movies && movies.Search);
  const [stateCategory, setStateCategory] = useState('batman');
  const [statePage, setStatePage] = useState(1)
  
  async function handleGetMoviesByCategory(cat){
    setStateListMovies([]);
    setStateCategory(cat);
    const movies = await getMovies(cat, 1);
    setStateMovies(movies);
    setStateListMovies(movies.Search);
  }
  
  async function handleLoadMore(){
    const newMovies = await getMovies(stateCategory, statePage);
    const newListMovies = newMovies.Search || [];
    setStateListMovies([...stateListMovies, ...newListMovies]);
    setStatePage(statePage + 1);
  }
  
  return (
    <MainLayout isHeader isFooter> 
      <MainHead seo={SEO.DEFAULT} />
      <Container customCSS='background: #fff;'>
        <Box isBlock paddingY={3}>
          <Text fontSizeVariant='lg' fontWeightVariant='bold'>Julo the movies</Text>
        </Box>
        <Box paddingBottom={4}>
          <Button onClick={() => handleGetMoviesByCategory('batman')} colorVariant='grey'>Batman</Button>
          <Button onClick={() => handleGetMoviesByCategory('spiderman')} marginLeft={1} colorVariant='grey'>Spiderman</Button>
          <Button onClick={() => handleGetMoviesByCategory('game of thrones')} marginLeft={1} colorVariant='grey'>Game of Thrones</Button>
        </Box>
        {stateMovies && 
          stateMovies.Response === 'True' &&
          stateListMovies.length && stateListMovies.map(item => {
            return(
              <Box key={item.imdbID}>
                <MovieCard
                  id={item.imdbID}
                  title={item.Title}
                  image={item.Poster}
                  category={item.Type}
                  release={item.Release}
                />
              </Box>
          )})
        || null}
        <InfiniteScroll
          status={stateMovies && stateMovies.Response === 'True' ? 'success' : 'loading'}
          triggerFunction={handleLoadMore}
          spinnerSize={36}
        />
      </Container>
      <Footer title='Pretest Julo - Agung Kurniawan 2021' />
    </MainLayout>
  )
}


Home.getInitialProps = async () => {
  const movies = await getMovies('batman');
  return {
    movies
  }
}

export default Home;