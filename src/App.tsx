import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import Main from "./module/Main";
import { chainsName, wagmiConfig } from "./utils/Functions";

function App() {
  return (
    <div className="App">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chainsName}
          modalSize="compact"
          theme={darkTheme()}
        >
          <Main />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
