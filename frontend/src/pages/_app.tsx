import { ChakraProvider } from '@chakra-ui/react';
import theme from './chacra';
import { Layout } from '@/components/Layout/Layout';

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
