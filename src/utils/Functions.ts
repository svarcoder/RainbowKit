import { configureChains, createConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

/* This code is configuring the chains and providers for the Wagmi library, which is used for
interacting with various blockchain networks. */
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

/* This code is using the `getDefaultWallets` function from the `@rainbow-me/rainbowkit` library to get
the default wallet connectors for the specified `chains`. The `connectors` object contains various
wallet connectors that can be used to interact with the specified blockchain networks. The `appName`
parameter is used to identify the application using the wallet connectors. */
const { connectors } = getDefaultWallets({
  appName: "RainbowKit",
  chains,
});

export const chainsName = chains;

/* This code is creating a configuration object for the Wagmi library, which includes the specified
`connectors` for interacting with various blockchain networks, as well as `publicClient` and
`webSocketPublicClient` providers. The `autoConnect` parameter is set to `true`, which means that
the library will automatically connect to the specified networks when it is initialized. The
resulting configuration object is exported as `wagmiConfig`. */
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
