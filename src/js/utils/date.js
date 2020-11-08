function getApiDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return [year, (month > 9 ? '' : '0') + month, (day > 9 ? '' : '0') + day].join('-');
}

export function getNDayAgo(n) {
    const date = new Date(new Date() - n * 24 * 60 * 60 * 1000);
    return getApiDate(date);
}

export function getCurrentDate() {
    return getNDayAgo(0);
}

export function getDateWeekAgo() {
    return getNDayAgo(6);
}

export function getCurrentMonth() {
    const day = new Date();
    const nameOfMonths = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август',
        'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    const month = nameOfMonths[day.getMonth()];
    return `дата(${month})`;
}

export function getCardDate(dateString) {
    const nameOfMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа',
        'сентября', 'октября', 'ноября', 'декабря'];
    const date = new Date(dateString);
    const month = nameOfMonths[date.getMonth()];

    return `${date.getDate()} ${month}, ${date.getFullYear()}`
}

export function getGraphDate() {
    let result = [];
    for ( let i = 0; i < 7; i++ ) {
        const date = new Date(getNDayAgo(i));
        const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        const weekday = daysOfWeek[date.getDay()];
        result.push(`${date.getDate()}, ${weekday}`);
    }
    return result.reverse();
}





