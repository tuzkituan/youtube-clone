const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_MONTH = ONE_DAY * 30;
const ONE_YEAR = ONE_MONTH * 12;

// const another_time = 1617179475756;

const convert_date_ago = {
  ago: 'ago',
  later: 'later',
  second: 'second',
  seconds: 'seconds',
  minute: 'minute',
  minutes: 'minutes',
  hour: 'hour',
  hours: 'hours',
  day: 'day',
  days: 'days',
  month: 'month',
  months: 'months',
  year: 'year',
  years: 'years',
};

export const convertDateAgo = (created_date: string) => {
  const now = new Date().getTime();

  const _created_date = new Date(created_date).getTime();

  const x = now - _created_date;

  // AGO
  if (x >= 0 && x < ONE_MINUTE) {
    const y = Math.floor(x / ONE_SECOND);
    return `${y} ${
      y === 1 ? convert_date_ago.second : convert_date_ago.seconds
    } ${convert_date_ago.ago}`;
  }

  if (x >= ONE_MINUTE && x < ONE_HOUR) {
    const y = Math.floor(x / ONE_MINUTE);
    return `${y} ${
      y === 1 ? convert_date_ago.minute : convert_date_ago.minutes
    } ${convert_date_ago.ago}`;
  }

  if (x >= ONE_HOUR && x < ONE_DAY) {
    const y = Math.floor(x / ONE_HOUR);
    return `${y} ${y === 1 ? convert_date_ago.hour : convert_date_ago.hours} ${
      convert_date_ago.ago
    }`;
  }

  if (x >= ONE_DAY && x < ONE_MONTH) {
    const y = Math.floor(x / ONE_DAY);
    return `${y} ${y === 1 ? convert_date_ago.day : convert_date_ago.days} ${
      convert_date_ago.ago
    }`;
  }

  if (x >= ONE_MONTH && x < ONE_YEAR) {
    const y = Math.floor(x / ONE_MONTH);
    return `${y} ${
      y === 1 ? convert_date_ago.month : convert_date_ago.months
    } ${convert_date_ago.ago}`;
  }

  if (x >= ONE_YEAR) {
    const y = Math.floor(x / ONE_YEAR);
    return `${y} ${y === 1 ? convert_date_ago.year : convert_date_ago.years} ${
      convert_date_ago.ago
    }`;
  }
  // AGO

  // LATER
  if (x < 0 && x > -ONE_MINUTE) {
    const y = -Math.floor(x / ONE_SECOND);
    return `${y} ${
      y === 1 ? convert_date_ago.second : convert_date_ago.seconds
    } ${convert_date_ago.later}`;
  }

  if (x <= -ONE_MINUTE && x > -ONE_HOUR) {
    const y = -Math.floor(x / ONE_MINUTE);
    return `${y} ${
      y === 1 ? convert_date_ago.minute : convert_date_ago.minutes
    } ${convert_date_ago.later}`;
  }

  if (x <= -ONE_HOUR && x > -ONE_DAY) {
    const y = -Math.floor(x / ONE_HOUR);
    return `${y} ${y === 1 ? convert_date_ago.hour : convert_date_ago.hours} ${
      convert_date_ago.later
    }`;
  }

  if (x <= -ONE_DAY && x > -ONE_MONTH) {
    const y = -Math.floor(x / ONE_DAY);
    return `${y} ${y === 1 ? convert_date_ago.day : convert_date_ago.days} ${
      convert_date_ago.later
    }`;
  }

  if (x <= -ONE_MONTH && x > -ONE_YEAR) {
    const y = -Math.floor(x / ONE_MONTH);
    return `${y} ${
      y === 1 ? convert_date_ago.month : convert_date_ago.months
    } ${convert_date_ago.later}`;
  }

  if (x <= -ONE_YEAR) {
    const y = -Math.floor(x / ONE_YEAR);
    return `${y} ${y === 1 ? convert_date_ago.year : convert_date_ago.years} ${
      convert_date_ago.later
    }`;
  }
  return '';
  // LATER
};

export const test = '';
