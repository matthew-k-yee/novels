import axios from 'axios';

async function login(credentials){
    const token = await axios.post('/user_token',
        {
          "auth": credentials
        });
    return token.data
}

export {
  login
}
