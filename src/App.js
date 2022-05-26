import './App.css';
import {useState} from "react"
import LoginForm from './LoginForm';

function App() {

const adminUser = {
  email: 'shearer@shearer.com',
  password: "shearer123"
}

const [user, setUser] = useState({name: "", email: ""})
const [error, setError] = useState('')




function login(details){
  if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged In")
    setUser({
      name: details.name,
      email: details.email
    })
  } else{
    setError("Details do not match!")
  }
}

function logout(){
  setUser({name: '', email: ''})
}
  return (
    <div className="App">
      {(user.email != "") ? (
        <div>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm  login={login} error={error}/> 
      )}
    </div>
  );
}

export default App;
