import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Crypto from './pages/Crypto';
import Home from './pages/Home';
import Search from './pages/Search';
import './static/styles/main.css';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/search/" element={<Search />} />
                <Route path="/:id" element={<Crypto />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h2>404 not found</h2>} />
            </Routes>
        </Layout>
    );
}

export default App;
