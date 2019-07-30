import config from '../config';
import TokenService from './token-service';

const CharListApiService ={
  getCharList() {
    return(
      fetch(`${config.API_ENDPOINT}/charlist`),{
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`
        },
      })
        .then(res => 
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
          )
  },
  getchar(charId) {
    return fetch(`${config.API_ENDPOINT}/charlist/${charId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => 
        (res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  }
}
