export function getCurrentDate() {
    const date = new Date();
    return getApiDate(date);
}

export function getDateWeekAgo() {
    const date = new Date();
    date.setDate(date.getDate() - 6);
    return getApiDate(date);
}

function getApiDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    return [date.getFullYear(),
        (month > 9 ? '' : '0') + month,
        (day > 9 ? '' : '0') + day].join('-');
}

export function getItemDate(dateString) {
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября',
        'ноября', 'декабря'];
    const date = new Date(dateString);
    const months = monthNames[date.getMonth()];

    return `${date.getDate()} ${months}, ${date.getFullYear()}`
}

const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
