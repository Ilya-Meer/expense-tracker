import authReducer from './authReducer';

describe('authentication reducer', () => {
  describe('login functionality', () => {
    it('should create a uid for the user', () => {
      const user = {
        uid: '12345'
      }
      const state = authReducer(undefined, { type: 'LOGIN', uid: user.uid });
      expect(state.uid).toBe('12345');
    })
  })

  describe('logout functionality', () => {
    it('should create a uid for the user', () => {
      const state = authReducer({uid: '12345'}, { type: 'LOGOUT' });
      expect(state.uid).toBe(undefined);
    });
  })
})