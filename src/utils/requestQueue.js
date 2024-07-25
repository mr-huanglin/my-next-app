let currentRequests = 0;
const queue = [];
const maxConcurrentRequests = 6;

const runNext = () => {
  if (currentRequests < maxConcurrentRequests && queue.length > 0) {
    const { requestFn, resolve, reject, retries } = queue.shift();
    currentRequests++;

    requestFn()
      .then(resolve)
      .catch((error) => {
        if (retries > 0) {
          console.log(`Retrying... attempts left: ${retries}`);
          queue.push({ requestFn, resolve, reject, retries: retries - 1 });
        } else {
          reject(error);
        }
      })
      .finally(() => {
        currentRequests--;
        runNext();
      });
  }
};

const addRequestToQueue = (requestFn, retries = 3) => {
  return new Promise((resolve, reject) => {
    queue.push({ requestFn, resolve, reject, retries });
    runNext();
  });
};

export { addRequestToQueue };
