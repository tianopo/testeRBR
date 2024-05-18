import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query'
import theme from './chacra';
import { Layout } from '@/components/Layout/Layout';
import { queryClient } from '@/config/apiConfig';

const { ToastContainer } = createStandaloneToast()
function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
