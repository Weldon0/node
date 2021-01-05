function dateFormat(date) {
  const dt = new Date(date);

  const y = dt.getFullYear();
  const m = dt.getMonth() + 1;
  const d = dt.getDate();

  const hh = dt.getHours();

  const mm = dt.getMinutes();
  const ss = dt.getSeconds();

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

module.exports = {
  dateFormat,
};
