
// Filename - App.js
 
import "./App.css";
import Sidebar from "./components/Sidebar"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import ImportWallet from "./components/pages/ImportWallets";
import ListTransactions from "./components/pages/ListTransactions";
function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route
                    path="/import-wallet"
                    element={<ImportWallet />}
                />
                <Route
                    path="/all-wallets"
                    element={<ListTransactions />}
                />
             </Routes> 
        </Router>
    );
}
 
export default App;
