async function fetchUserData() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1'
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Something wrong with HTTP:', error.message);
        throw error;
    }
}

module.exports = fetchUserData