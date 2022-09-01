// export const convertSecondsToHHmmss = (ms: number) => {
//   let h = Math.floor(ms / 1000 / 60 / 60);
//   let m = Math.floor((ms / 1000 / 60 / 60 - h) * 60);
//   let s = Math.floor(((ms / 1000 / 60 / 60 - h) * 60 - m) * 60);

//   if (s < 10) s = `0${s}`;
//   else s = `${s}`;
//   if (m < 10) m = `0${m}`;
//   else m = `${m}`;
//   if (h < 10) h = `0${h}`;
//   else h = `${h}`;

//   return `${h}:${m}:${s}`;
//   // return moment.utc(duration).format('HH:mm:ss');
// };
// export const test = '';

export const convertSecondsToHHmmss = (timeSecond: number) => {
  let duration, second, minute, hour, temp, result;

  // convert ms to second
  timeSecond = Number(timeSecond / 1000);

  if (isNaN(timeSecond)) timeSecond = 0;
  duration = Math.round(timeSecond);
  second = duration % 60;
  temp = (duration - second) / 60;
  if (temp > 59) {
    minute = temp % 60;
    hour = (temp - minute) / 60;
    minute = (minute + '').length === 1 ? '0' + minute : minute + '';
    hour = hour + '';
  } else {
    minute = temp + '';
  }
  second = (second + '').length === 1 ? '0' + second : second + '';

  if (hour) result = `${hour}:${minute}:${second}`;
  else result = `${minute}:${second}`;
  return result;
};

export const test = '';
