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

/* fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log('Отримані дані: ', users);

    renderUsers(users);
  })
  .catch(error => console.log('Error: ', error)); */

//!   ======================================================
import axios from 'axios';

/* axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/users',
})
  .then(response => console.log(response))
  .catch(error => console.log(error)); */

//!  ============================
/* axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(response => console.log(response))
  .catch(error => console.log(error)); */

/* axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch(error => {
    console.log(error);
  }); */

//!  ============================
/* axios.get('https://jsonplaceholder.typicode.com/users').then().catch();
axios.get('https://jsonplaceholder.typicode.com/posts').then().catch();
axios.get('https://jsonplaceholder.typicode.com/images').then().catch(); */

//!  ============================
/* axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.get('/users').then().catch();
axios.get('/posts').then().catch(); */
// axios.get('/images').then().catch();

//!  ============================
/* const myApiKey = 'secret-api-key-for-every-request';
axios.defaults.headers.common['header-name'] = myApiKey; */

/* axios.get('https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name');

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: 'name',
});

axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`); */

//!  ============================
axios.get('https://jsonplaceholder.typicode.com/users', {
  params: {
    _limit: 7,
    _sort: 'name',
  },
});
