import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
const handleLogin = async (event) => {
 event.preventDefault()
if (!email || !password) {setError("Please fill all fields") 
  return}
   try { const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({ email, password }),
      })
    const data = await res.json()
if (data.success) {window.location.href = "/homepage"
      } else {
        setError(data.message)
      }
    } catch (err) {
      setError("Server error")
    }
  }

  return (
    <div className="container">
      <div className="login-box">
        <h1 className="logo">NETFLIX</h1>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="input" value={email}
      onChange={(e) => setEmail(e.target.value)}/>
         <input type="password" placeholder="Password" className="input"
            value={password} onChange={(e) => setPassword(e.target.value)} />

{error && <p className="error">{error}</p>}
<button className="btn">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default App
