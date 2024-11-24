import React, {useState} from 'react'

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form Data Submitted:', formData);
            alert('Form submitted successfully!');
          }
    }

    const validateForm = () => {
        const newErrors = {};
        if (!username) {
          newErrors.username = 'Username is required';
        }
        if (!email) {
          newErrors.email = 'Email is required';
        } 
        if (!password) {
          newErrors.password = 'Password is required';
        } else if (password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Form is valid if there are no errors
      };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                id='username' 
                name='username' 
                required 
                value={username} 
                onChange={(e) => setFormData(e.target.value)}
            />
            
            <br />

            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name='email' 
                id='email' 
                required 
                value={email} 
                onChange={(e) => setFormData(e.target.value)} 
            />

            <br />

            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name='password' 
                id='password' 
                required 
                value={password} 
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