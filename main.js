document.addEventListener('DOMContentLoaded', () => {
    const habitInput = document.getElementById('habit-input');
    const addHabitButton = document.getElementById('add-habit-button');
    const habitsContainer = document.getElementById('habits');
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    addHabitButton.addEventListener('click', () => {
        const habitName = habitInput.value.trim();

        if (habitName === '') {
            alert('Please enter a habit');
            return;
        }

        const habitElement = document.createElement('div');
        habitElement.className = 'habit';

        const habitTitle = document.createElement('div');
        habitTitle.className = 'habit-title';
        habitTitle.textContent = habitName;

        const habitWeek = document.createElement('div');
        habitWeek.className = 'habit-week';

        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'habit-day';
            dayElement.textContent = day;
            dayElement.addEventListener('click', () => {
                dayElement.classList.toggle('completed');
            });
            habitWeek.appendChild(dayElement);
        });

        habitElement.appendChild(habitTitle);
        habitElement.appendChild(habitWeek);
        habitsContainer.appendChild(habitElement);

        habitInput.value = '';
    });
});
