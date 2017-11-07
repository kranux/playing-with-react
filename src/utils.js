import moment from 'moment';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const formatTime = (time, format) => moment(time).format(format || DATE_FORMAT);

