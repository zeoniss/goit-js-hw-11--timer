//Создаем ссылки на DOM-элемент
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
};
refs.days.textContent = '--';
refs.hours.textContent = '--';
refs.mins.textContent = '--';
refs.seconds.textContent = '--';


class CountdownTimer {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    updateTimer(time) {
            const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = this.pad(
                Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            );
            const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
            refs.days.textContent = `${days}`;
            refs.hours.textContent = `${hours}`;
            refs.mins.textContent = `${mins}`;
            refs.seconds.textContent = `${secs}`;

            if (days <= 0) {
                refs.days.textContent = '--';
            }
            if (hours <= 0) {
                refs.hours.textContent = '--';
            }
            if (mins <= 0) {
                refs.mins.textContent = '--';
            }
            if (secs <= 0) {
                refs.seconds.textContent = '--';
            }
        }
        // pad проверяет сколько цифр в стороке. Если меньше двух, то добавляем "0" в начало. 
    pad(value) {
        return String(value).padStart(2, '0');
    }

    //Функция таймера обратного отсчета
    countdownTimer() {
        const timerId = setInterval(() => {
            const currentTime = Date.now();
            const targetTime = this.targetDate.getTime();
            const searchingTime = targetTime - currentTime;
            if (searchingTime <= 0) {
                clearInterval(timerId);
            }

            this.updateTimer(searchingTime);
        }, 1000);
    }
}

const TheTimer = new CountdownTimer(
    2,
    new Date('Feb 23 2021 12:12:00'),
).countdownTimer();