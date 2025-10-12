export function toHumanReadableTimespan(from: Date, to: Date){
    let yearDif = to.getFullYear() - from.getFullYear();
    let monthDif = to.getMonth() - from.getMonth();

    if(yearDif === 0 && monthDif === 0) { // Within this month!
        let currentDay = new Date().getDay() + 1;
        return `${currentDay} day${currentDay > 1 ? 's' : ''}`;
    }

    if(monthDif < 0){
        yearDif--;
        monthDif = 12 + monthDif;
    }

    let yearText = yearDif > 0 ? `${yearDif} year${yearDif > 1 ? 's' : ''}` : '';
    let monthText = monthDif > 0 ? `${monthDif} month${monthDif > 1 ? 's' : ''}` : '';

    return `${yearText}${yearText != '' && monthText != '' ? ' and ' : ''}${monthText}`;
}

export function toHumanReadableMonthAndYear(date: Date) {
    return `${getTypedMonth(date.getMonth())} ${date.getFullYear()}`;
}

function getTypedMonth(month: number){
    switch (month) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
        default: return '';
    }
}