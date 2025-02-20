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
/* const options = {
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
  }); */

/* fetch('some-url', {
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'custom value',
    }
  }) */

//!   =====================================
/* const fetchUserBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

fetchUserBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(users => {
      const markup = users
        .map(user => {
          return `<li>
	          <p><b>Name</b>: ${user.name}</p>
	          <p><b>Email</b>: ${user.email}</p>
	          <p><b>Company</b>: ${user.company.name}</p>
	        </li>`;
        })
        .join('');

      userList.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}); */

//!   =====================================
/* let globarVar;

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log('users inside then callback: ', users);

    globarVar = users;

    console.log('globalVar inside fetch callback: ', globarVar);
  });

console.log('globarVar outside fetch: ', globarVar); */

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log('Отримані дані: ', users);

    renderUsers(users);
  })
  .catch(error => console.log('Error: ', error));
