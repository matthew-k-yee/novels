import axios from 'axios'


async function getMyBooks() {
  console.log('I should fetch my books')
  const response = await axios({
    url: 'books/mine',
    headers: {
      'Authorization': `Bearer ${localStorage}.getItem('token')`
    }
  });
  console.log(response);
  return response.data
}
export {
  getMyBooks
}
