import I18n from 'react-native-i18n';
import en from '../i18n/locales/en';

I18n.fallbacks = true;

I18n.translations = {
    en
};
// const year = dataString.substring(0, 4);
// const month = dataString.substring(5, 7);
// const day = dataString.substring(8, 10);
// const hours = dataString.substring(11, 13);
// const minutes = dataString.substring(14, 16);
// const date = new Date(year, monthE, dayE, hours, minutes, 0, 0);    

export function getDateFormmatedInExtenso(dataString) {
    // new Date(year, month, day, hours, minutes, seconds, milliseconds)    
    const month = dataString.substring(5, 7);
    const day = dataString.substring(8, 10);
    return `${getMonthInExtenso(month)} ${day}`;
}

export function getDateFormmatedInExtensoWithHours(dataString) {
    const month = dataString.substring(5, 7);
    const day = dataString.substring(8, 10);
    const hours = dataString.substring(11, 13);
    return `${getMonthInExtenso(month)} ${day} - ${getHoursPmAm(hours)}`;
}

export function getDateFormmatedInExtensoWithMin(dataString) {
    const month = dataString.substring(5, 7);
    const day = dataString.substring(8, 10);
    const hours = dataString.substring(11, 13);
    const minutes = dataString.substring(14, 16);
    return `${getMonthInExtenso(month)} ${day} - ${getHoursMinPmAm(hours, minutes)}`;
}

export function getDateFormmatedDayMonth(dataString) {
    const month = dataString.substring(5, 7);
    const day = dataString.substring(8, 10);
    return `${day}/${month}`;
}
export function getDatefomatterYYYYMMDD(date) {
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}

function getMonthInExtenso(month) {
    switch (month) {
        case '01':
            return I18n.t('months.jan');
        case '02':
            return I18n.t('months.feb');
        case '03':
            return I18n.t('months.mar');
        case '04':
            return I18n.t('months.apr');
        case '05':
            return I18n.t('months.may');
        case '06':
            return I18n.t('months.jun');
        case '07':
            return I18n.t('months.jul');
        case '08':
            return I18n.t('months.aug');
        case '09':
            return I18n.t('months.sep');
        case '10':
            return I18n.t('months.oct');
        case '11':
            return I18n.t('months.nov');
        case '12':
            return I18n.t('months.dec');

        default:
            return 'Month incorrect';
    }
}

function getHoursPmAm(hours) {
    if (hours <= 12) {
        return `${hours} am`;
    }
    return `${hours} pm`;
}

function getHoursMinPmAm(hours, min) {
    if (hours <= 12) {
        return `${hours}: ${min} am`;
    }
    return `${hours} pm`;
}

