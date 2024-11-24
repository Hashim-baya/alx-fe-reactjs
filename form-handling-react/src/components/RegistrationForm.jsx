import React, {useState} from 'react'

function RegistrationForm() {
    const [formData, setFormData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                id='username' 
                name='username' 
                required 
                value={formData.username} 
                onChange={(e) => setFormData(e.target.value)}
            />
            
            <br />

            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name='email' 
                id='email' 
                required 
                value={formData.email} 
                onChange={(e) => setFormData(e.target.value)} 
            />

            <br />

            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name='password' 
                id='password' 
                required 
                value={formData.password} 
                onChange={(e) => setFormData(e.target.value)} 
            />

            <br />

            <input 
                type="submit" 
                value="Submit" 
                id='submit' 
            />
        </form>
        

    </div>
  )
}

export default RegistrationForm