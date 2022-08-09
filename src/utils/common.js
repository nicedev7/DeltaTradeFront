// Get Abbrevation of hex addres //
export const reduceHexAddress = (strAddress) => {
  if(!strAddress)
    return ''
  if(strAddress.length<12)
    return strAddress
  return `${strAddress.substring(0, 12)}...`;
}
export const getTime = (timestamp) => {
  const date = new Date(timestamp);
  const dateStr = [date.getMonth()+1, date.getDate()].join('/');

  let hours = date.getHours();
  const suffix = hours >= 12 ? 'PM' : 'AM';
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours.toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');
  const sec = date.getSeconds().toString().padStart(2, '0');
  const timeStr = [hours, min, sec].join(':').concat(' ').concat([suffix, dateStr].join(' '));
  return timeStr
};