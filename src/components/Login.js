import React from 'react';

const Login = () => {
  // Implement login form
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">Login</h1>
        <form className="flex flex-col items-center justify-center w-full h-screen">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;