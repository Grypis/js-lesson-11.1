//* fetch(url, options)

/* fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Response handling
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  }); */

//!   =====================================
/* fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Отримані дані: ', data);
  })
  .catch(error => {
    console.log('Помилка запиту: ', error);
  }); */

//!   =====================================
const options = {
  method: 'GET',
};

fetch('https://jsonplaceholder.typicode.com/users', {
  headers: {
    Accept: 'application/json',
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });

/* fetch('some-url', {
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'custom value',
    }
  }) */
