const pattern = /\/\d\//;

document.addEventListener('keypress', function(e) {
  const numberKey = Number(e.key);

  if (
    e.ctrlKey &&
    !Number.isNaN(numberKey) &&
    window.location.href.match(pattern)
  ) {
    window.location.href = window.location.href.replace(pattern, `/${numberKey}/`);
  }
})
