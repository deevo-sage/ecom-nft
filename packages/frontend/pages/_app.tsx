import React from 'react';
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss"
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { RecoilRoot } from 'recoil';


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient()
    return (
        <ChakraProvider theme={theme}>
<QueryClientProvider client={queryClient}>
<Hydrate state={pageProps.dehydratedState}>
<RecoilRoot>
        <Component {...pageProps} />
        </RecoilRoot>
</Hydrate>
</QueryClientProvider>
</ChakraProvider>
    );
}

export default MyApp;
