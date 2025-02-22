import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

//! ==========================================
/* fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
fetch('https://jsonplaceholder.typicode.com/comments?postId=2');
fetch('https://jsonplaceholder.typicode.com/comments?postId=3');
fetch('https://jsonplaceholder.typicode.com/comments?postId=4');
fetch('https://jsonplaceholder.typicode.com/comments?postId=5'); */

//! ==========================================
/* function foo(id) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/comments';
  const params = `?postId=${id}`;

  const url = BASE_URL + END_POINT + params;
  fetch(url);
}

foo(2);
 */

//! ==========================================
function fetchUser(id) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/users';
  const params = new URLSearchParams({
    id: id,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  console.log(url);
}

fetchUser(1);
