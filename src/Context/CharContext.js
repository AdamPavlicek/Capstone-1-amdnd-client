import React, {Component} from 'react';
import TokenService from '../services/token-service';

const CharContext = React.createContext({
  charList: [],
  selectedChar: {
    charName: '',
    charList: [],
  },
  error: null,
  setError: () => { },
  clearError: () => { },
  setUser: () => { },
  clearUser: () => { },
  processLogin: () => { },
  processLogout: () => { },

})

export default CharContext

export class CharProvider extends Component {
  constructor(props){
    super(props)
    const state = {
      charList: [],
      selectedChar: {
        charName: '',
        charRace: '',
        charHealth: 0,
        charStrength: 10,
        charDexterity: 10,
        charConstitution: 10,
        charInteligence: 10,
        charWisdom: 10,
        charCharisma: 10,
        
      },
      charIsSelected: false,
      error: null
    }

    const jwtPayload = TokenService.parseAuthToken()

      if(jwtPayload){
        state.user = {
          id: jwtPayload.user_id,
          name: jwtPayload.name,
          username: jwtPayload.sub,
        }
      }

      this.state = state;
  }

  setError = error => {
    console.error(error)
    this.setError({error})
  }

  clearError = () => {
    this.setState({error: null})
  }

  setUser = user => {
    this.setState({user})
  }

  clearUser = () => {
    this.setState({user: {}})
  }

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub,
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    this.setUser({})
  }

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.setError,
      setUser: this.setUser,
      clearUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,

    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}