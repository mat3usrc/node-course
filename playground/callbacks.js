const doWorkCallback = callback => {
  setTimeout(() => {
    callback(undefined, "Pastel");
  }, 2000);
};

doWorkCallback((err, res) => {
  if (err) throw err;

  console.log(res);
});
