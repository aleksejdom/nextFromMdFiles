const url = 'http://localhost:1337/api/home';
const response = await fetch(url);
const body = await response.json();
console.log(JSON.stringify(body, null, 2));