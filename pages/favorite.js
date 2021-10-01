import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import MainHead from '../layout/MainHead';
import SEO from '../constant/seo';
import { Box, Container, Text, Toast, MovieCard, EmptyState } from '../ui';
import { useFavoriteDispatch, useFavoriteState } from '../context/favorite';

function Favorite() {
  const { state }  = useFavoriteState();
  const { setFavorite } = useFavoriteDispatch();
  const [stateFavorite, setStateFavorite] = useState();
  const [stateToast, setStateToast] = useState({
    status: false,
    type: 'danger',
    text: '',
    autoCloseDuration: 3000,
  });

  useEffect(() => {
    if(state && state.favorite_items && state.favorite_items.length){
      setStateFavorite(state.favorite_items);
    }
  }, [state]);

  function handleRemoveFromFavorite(id){
    const index = stateFavorite.map(x => {
      return x.imdbID;
    }).indexOf(id);
    stateFavorite.splice(index, 1);

    setFavorite({
      favorite_items: [...stateFavorite]
    });
    handleRemoveFavoriteToast('success', `Movie id:${id} Successfully removed from your favorite`, 3000);

  }

  function closeToast(){
    setStateToast({
      status: false,
      type: '',
      text: '',
      autoCloseDuration: 3000,
    })
  }

  function handleRemoveFavoriteToast(type, text, autoCloseDuration) {
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
      <Container customCSS="background: #fff; margin-bottom: 5em;">
        <Box isBlock paddingY={3}>
          <Text fontSizeVariant='lg' fontWeightVariant='bold'>Favorite Movies</Text>
        </Box>
        {
          stateFavorite && 
          stateFavorite.length &&
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
                isFavorite
                onRemoveFavorite={handleRemoveFromFavorite}
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
      {stateToast && stateToast.status &&
        <Toast type={stateToast.type} autoCloseDuration={stateToast.autoCloseDuration} onClose={closeToast}>
          <Text fontSizeVariant='md'>{stateToast.text}</Text>
        </Toast>
      }
    </MainLayout>
  )
}

export default Favorite;