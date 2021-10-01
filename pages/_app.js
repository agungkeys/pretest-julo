import '../styles/globals.css';
import { FavoriteProvider } from '../context/favorite';

function MyApp({ Component, pageProps }) {
  return (
    <FavoriteProvider>
      <Component {...pageProps} />
    </FavoriteProvider>
  )
}

export default MyApp;