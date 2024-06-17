document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-form').addEventListener('submit', fetchData);
});

async function fetchData(event) {
    event.preventDefault();
    const url = document.getElementById('url-input').value;
    const responseContainer = document.getElementById('response-container');
    responseContainer.textContent = 'Fetching data...';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json(); // Parse the response as JSON
        responseContainer.textContent = JSON.stringify(data, null, 2); // Format JSON data
    } catch (error) {
        responseContainer.textContent = 'Failed to fetch data: ' + error.message;
    }
}
