import moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')

export const formatStringDate = (stringDate) => {
    return moment(stringDate).format('DD MMM');
}

export const extractHourAndMinutes = (stringDatetime) => {
    return moment(stringDatetime).format('HH:mm');
}

// export default DateUtils;