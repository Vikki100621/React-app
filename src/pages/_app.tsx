import { AppProps } from 'next/app';
import '../assets/styles/index.css';
import { wrapper } from 'store/store';

export function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export default wrapper.withRedux(MyApp);
