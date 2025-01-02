document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("greetingForm");
    const nameInput = document.getElementById("nameInput");
    const greetingMessage = document.getElementById("greetingMessage");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        if (!name) return;

        // Очистити і сховати старе повідомлення
        greetingMessage.classList.add("d-none");
        greetingMessage.textContent = "";

        //асинхронна операція
        await showGreeting(name);
    });

    async function showGreeting(name) {
        return new Promise((resolve) => {
            setTimeout(() => {
                greetingMessage.textContent = `Вітаємо, ${name}!`;
                greetingMessage.classList.remove("d-none");
                resolve();
            }, 2000);
        });
    }
});
