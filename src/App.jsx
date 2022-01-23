import { useEffect, useState } from 'react';
import logo from './static/icons/logo.svg';
import './static/styles/main.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-y-5 bg-white dark:bg-gray-900">
            <img src={logo} className=" w-52" alt="logo" />

            <button
                className="px-5 py-2 duration-300 bg-gray-900 hover:bg-gray-800 text-white rounded dark:bg-blue-700 dark:hover:bg-blue-900"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
            >
                Toggle Theme
            </button>
        </div>
    );
}

export default App;
