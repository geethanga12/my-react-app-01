export default function UserGreeting(props) {

  const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

  const logInFailed = <h2 className="login">Please Log In</h2>

  return(props.isLoggedIn ?  welcomeMessage: logInFailed);
}