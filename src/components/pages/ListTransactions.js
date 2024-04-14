import React, { useEffect, useState } from 'react';
import { networks, payments, ECPair } from 'bitcoinjs-lib';

function ListTransactions() {
  const [transactions, setTransactions] = useState([]);
  const testnet = networks.testnet;

  useEffect(() => {
    async function fetchTransactions() {
      // Retrieve wallets from localStorage
      const storedWallets = JSON.parse(localStorage.getItem('importedWallets')) || [];

      const allTransactions = [];

      for (let wallet of storedWallets) {
        const node = ECPair.fromPrivateKey(Buffer.from(wallet.privateKey, 'hex'), { network: testnet });
        const { address } = payments.p2pkh({ pubkey: node.publicKey, network: testnet });

        const url = `https://api.blockcypher.com/v1/btc/test3/addrs/${address}/full`;
        const response = await fetch(url);
        const data = await response.json();

        allTransactions.push(...data.txs);
      }

      setTransactions(allTransactions);
    }

    fetchTransactions();
  }, [testnet]);

  return (
    <div>
      <h2>Bitcoin Testnet Transactions</h2>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            <strong>Transaction ID:</strong> {tx.txid}, <strong>Amount:</strong> {tx.total}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTransactions;
