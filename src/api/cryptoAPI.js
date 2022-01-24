import axios from 'axios';

const cryptoAPI = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/',
    headers: {
        'x-rapidapi-host': 'coingecko.p.rapidapi.com',
        'x-rapidapi-key': 'd0dc2c53f2msh9957bdcc2b8bd98p15f607jsna5a3744deea3',
    },
});

export default cryptoAPI;
