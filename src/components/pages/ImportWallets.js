import React, { useState } from 'react';
import { Wallet } from '@ethersproject/wallet';
import * as bip39 from 'bip39';
import "../pages_CSS/AboutUs.css"
function ImportWallet() {
  const [mnemonic, setMnemonic] = useState('');
  const [walletName, setWalletName] = useState('');
  const [error, setError] = useState(null);

  const importWallet = () => {
    try {
      // Validate mnemonic
      if (!bip39.validateMnemonic(mnemonic)) {
        setError('Invalid mnemonic');
        return;
      }

      // Create wallet from mnemonic
      const wallet = Wallet.fromMnemonic(mnemonic);

      // Log the wallet and wallet name
      console.log('Imported wallet:', wallet);
      console.log('Wallet name:', walletName);

      // Store the wallet in localStorage
      const importedWallets = JSON.parse(localStorage.getItem('importedWallets') || '[]');
      importedWallets.push({
        privateKey: wallet.privateKey,
      });
      localStorage.setItem('importedWallets', JSON.stringify(importedWallets));

      // Clear inputs
      setMnemonic('');
      setWalletName('');
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Import Wallet</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>
          Mnemonic:
          <input
            type="text"
            value={mnemonic}
            onChange={(e) => setMnemonic(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Wallet Name:
          <input
            type="text"
            value={walletName}
            onChange={(e) => setWalletName(e.target.value)}
          />
        </label>
      </div>
      <button onClick={importWallet}>Import</button>
    </div>
  );
}

export default ImportWallet;
