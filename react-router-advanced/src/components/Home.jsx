const Home = () => {
    const handleLogin = () => localStorage.setItem("auth", "true");
    const handleLogout = () => localStorage.setItem("auth", "false");
  
    return (
      <div>
        <h1>Home</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };
  
  export default Home;
  