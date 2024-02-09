import { useState } from "react"

const TestForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const handleUsernameChange = (ev) => {
    setUsername(ev.target.value)
  }

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    //Implement authentication call here
  }

  return (
   <form onSubmit={handleSubmit}>
    <div className="form-section">
      <label htmlFor="username">Username:  </label>
      <input type="text" 
      id="username" className="username-field" value={username} onChange={handleUsernameChange}/>
    </div>

    <div className="form-section">
      <label htmlFor="password">Password:     </label>
      <input type="password" id="password" className="password-field" value={password} onChange={handlePasswordChange}/>
    </div>

    <div>
      <button className="btn" type="submit">Login</button>
    </div>
   </form>
  )
}
export default TestForm