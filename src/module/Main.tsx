import { ConnectButton } from "@rainbow-me/rainbowkit";

const Main = () => {
  return (
    <div className="main">
      <h1>Rainbowkit Demo</h1>
      <ConnectButton
        accountStatus="avatar"
        label="Connect Wallet"
        showBalance={true}
      />
    </div>
  );
};

export default Main;
