let eventSourse = new EventSource('http://localhost:3000/pizza');
const messageContainer = document.querySelector(".message")
const closeButton = document.querySelector(".close-button");
const openButton = document.querySelector(".open-button");


function setEventSourceHandlers(es) {
    es.onmessage = (event) => {
        console.log(event);
        messageContainer.innerHTML += `<p>${event.data}</p>`;
    }
    es.onerror = (error) => {
        console.error('Error occurred:', error);
        document.querySelector('.error-message').innerHTML += `<p>Error: ${error.message}</p>`;
    }
}
setEventSourceHandlers(eventSourse);

closeButton.onclick = () => {
    eventSourse.close();
    const p = document.createElement("p");
    p.textContent = 'Connection closed';
    messageContainer.appendChild(p);
}

openButton.onclick = () => {
    if (eventSourse.readyState === EventSource.CLOSED) {
        eventSourse = new EventSource('http://localhost:3000/pizza');
        setEventSourceHandlers(eventSourse);
        const p = document.createElement("p");
        p.textContent = 'connection opened';
        messageContainer.appendChild(p);
    }
}
