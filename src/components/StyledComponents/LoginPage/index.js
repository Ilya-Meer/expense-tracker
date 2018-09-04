import styled from 'styled-components';


const LoginPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url('/images/loginbg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const Dialog = styled.div`
  height: 400px;
  width: 85%;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #333;
  background: rgba(250, 250, 250, 0.7);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px 0px;
  @media all and (min-width: 620px) {
    width: 350px;
  }

  h1 {
    text-align: center;
  }

  p {
    margin: 5px 0; 
  }

  button {
    margin: 1rem 0 0 0;
    border: 1px solid rgba(255,255,255,0.2); 
  }
`

export { LoginPageWrapper, Dialog };