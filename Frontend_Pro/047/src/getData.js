const axios = require('axios');

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userName = response.data.map(user => user.username);
        return userName;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

module.exports = getData;