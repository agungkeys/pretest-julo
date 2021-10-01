import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainLayout from '../layout/MainLayout';
import MainHead from '../layout/MainHead';
import SEO from '../constant/seo';
import { getMovies } from '../helpers/fetch';
import { Box, Button, Container, Row, Col, Text, Image, Footer, InfiniteScroll, MovieCard } from '../ui'

function Home({ movies }) {
  const [storeMovies, setStoreMovies] = useState({});
  const [stateListMovies, setStateListMovies] = useState([]);
  const [stateCategory, setStateCategory] = useState('batman');
  const [statePage, setStatePage] = useState(1)
  console.log("🚀 ~ file: index.js ~ line 15 ~ Home ~ statePage", statePage)
  
  async function handleGetMoviesByCategory(cat){
    setStatePage(1);
    setStoreMovies({});
    setStateListMovies([]);
    const movies = await getMovies(cat, statePage);
    setStoreMovies(movies);
    setStateListMovies(movies.Search);
    setStateCategory(cat);
  }
  
  async function handleLoadMore(){
    if(stateListMovies.length < parseInt(storeMovies.totalResults)){
      const newMovies = await getMovies(stateCategory, statePage);
      const newListMovies = newMovies.Search || [];
      setStateListMovies([...stateListMovies, ...newListMovies]);
      setStatePage(statePage + 1);
    }
  }

  useEffect(() => {
    setStoreMovies(movies);
    setStateListMovies(movies.Search);

    if(movies && movies.Response === 'False'){
      alert(movies.Error)
    }
  },[movies.length])

  
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
        {console.log("🚀 ~ file: index.js ~ line 54 ~ Home ~ storeMovies", storeMovies)}
        {console.log("🚀 ~ file: index.js ~ line 54 ~ Home ~ storeMovies.totalResults", storeMovies && storeMovies.totalResults)}
        {console.log("🚀 ~ file: index.js ~ line 54 ~ Home ~ storeMovies length ==>", stateListMovies && stateListMovies.length)}
        {storeMovies && 
          storeMovies.Response === 'True' &&
          stateListMovies.length && stateListMovies.map((item, key) => {
            return(
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
          )})
        || null}
        <InfiniteScroll
          status={storeMovies && storeMovies.Response === 'True' ? 'success' : 'loading'}
          triggerFunction={handleLoadMore}
          spinnerSize={36}
        />
        {stateListMovies && stateListMovies.length >= parseInt(storeMovies && storeMovies.totalResults) &&
          <Box colorVariant="blue" padding={1}>
            <Text isBlock textAlign="center" fontSizeVariant="sm" fontWeightVariant="semiBold" colorVariant="grey">--- This is the last ---</Text>
          </Box>
        || null}
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