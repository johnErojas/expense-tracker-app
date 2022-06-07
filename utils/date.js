export function getFormattedDate(date) {
    return date.toISOString().slice(0,10);
}

export function getFormattedDateAU(date) {
    const day = date.getDate() < 9 ? `0${date.getDate()}`: date.getDate();
    const mont = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    return `${day}-${mont}-${date.getFullYear()}`
}

export function getDateMinusDays(date,days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function inputDateToDate(DD_MM_YY) {
    const date = DD_MM_YY.split('-');
    return new Date(`${date[2]}-${date[1]}-${date[0]}`)
}