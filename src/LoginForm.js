import React, {useState} from 'react'

function LoginForm({ login, error }) {

    const [details, setDetails] = useState({name: '', email: '', password: ''})

function handleSubmit(e){
    e.preventDefault()
    login(details)

}


  return (
    <form onSubmit = {handleSubmit}>
        <div className='inner-form'>
            <h2>
                Login
            </h2>
            <div className='form-group'>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setDetails({...details, name: e.target.value})} 
                    value={details.name}
                ></input>
            </div>
            <div className='form-group'>
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setDetails({...details, email: e.target.value})} 
                    value={details.email}
                ></input>
            </div>
            <div className='form-group'>
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setDetails({...details, password: e.target.value})} 
                    value={details.password}
                ></input>
            </div>
            <input
                type="submit"
                value="LOGIN"
            >
            </input>
            <h2>
            {(error != "") ? (<div className="error">{error}</div>) : ''}
            </h2>
        </div>
    </form>
  )
}

export default LoginForm