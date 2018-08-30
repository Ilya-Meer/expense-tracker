import { login, logout } from './authActions';

describe('login actions', () => {
  it('should create a login action object', () => {
    const user = {
      uid: '12345'
    }
    const loginAction = login(user);
    expect(loginAction).toEqual({
      type: 'LOGIN',
      uid: '12345'
    })
  })
})

describe('logout actions', () => {
  it('should create a logout action object', () => {
    const logoutAction = logout();
    expect(logoutAction).toEqual({
      type: 'LOGOUT'
    })
  })
})