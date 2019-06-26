export function calculateMonth(year, month, x) {
  year += Math.floor((month + x - 1) / 12);

  month += x % 12;

  if(month < 1) {
    month = 12 - month;
  }else if(month > 12){
    month = month % 12;
  }

  return {year, month};
}

export function isVueComponent(object) {
  return true;
}