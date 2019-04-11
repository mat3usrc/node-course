const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([7, 4, 1]);
  }, 2000);
});

doWorkPromise.then(res => console.log(res)).catch(err => console.log(err));
