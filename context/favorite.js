import React, { createContext, useContext, useEffect, useReducer } from 'react';

const FavoriteStateContext = createContext();
const FavoriteDispatchContext = createContext();

const SET_FAVORITE = "SET_FAVORITE";

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case SET_FAVORITE:
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export const FavoriteProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getFavorite()
  }, []);

  const setFavorite = (payload) => dispatch({type: SET_FAVORITE, payload});

  const getFavorite = async () => {
    try {
      // get data from api
      // const cart = await commerce.cart.retrieve()
      // setFavorite(cart)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FavoriteDispatchContext.Provider value={{setFavorite}}>
      <FavoriteStateContext.Provider value={{state}}>
        {children}
      </FavoriteStateContext.Provider>
    </FavoriteDispatchContext.Provider>
  )
}

export const useFavoriteState = () => useContext(FavoriteStateContext);
export const useFavoriteDispatch = () => useContext(FavoriteDispatchContext);