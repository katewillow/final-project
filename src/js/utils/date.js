function getApiDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return [year, (month > 9 ? '' : '0') + month, (day > 9 ? '' : '0') + day].join('-');
}

export function getCurrentDate() {
    const date = new Date();
    return getApiDate(date);
}

export function getDateWeekAgo() {
    const date = new Date(new Date() - 6 * 24 * 60 * 60 * 1000);
    return getApiDate(date);
}

export function getCardDate(dateString) {
    const nameOfMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября',
        'ноября', 'декабря'];
    const date = new Date(dateString);
    const month = nameOfMonths[date.getMonth()];

    return `${date.getDate()} ${month}, ${date.getFullYear()}`
}

const daysOfWeek= ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
