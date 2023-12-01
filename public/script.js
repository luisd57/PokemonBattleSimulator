document.addEventListener('DOMContentLoaded', () => {
    const battleForm = document.querySelector('form');
    const battleLogsContainer = document.getElementById('battle-logs');

    battleForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(battleForm);
        const pokemon1 = formData.get('pokemon1');
        const pokemon2 = formData.get('pokemon2');

        try {
            const response = await fetch(`/battle?pokemon1=${pokemon1}&pokemon2=${pokemon2}`);
            const { winner, logs } = await response.json();

            battleLogsContainer.innerHTML = '';
            logs.forEach(log => {
                const logElement = document.createElement('div');
                logElement.textContent = log;
                battleLogsContainer.appendChild(logElement);
            });

            const winnerElement = document.createElement('div');
            winnerElement.innerHTML = `<strong>Winner: ${winner}</strong>`;
            battleLogsContainer.appendChild(winnerElement);

        } catch (error) {
            battleLogsContainer.textContent = 'Failed to retrieve battle results';
        }
    });
});
