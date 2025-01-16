import React from 'react';
    import Calculator from './Calculator';
    import TodoList from './TodoList';

    function Home() {
      return (
        <div>
          <h1>Home</h1>
          <p>Welcome to the home page!</p>
          <Calculator />
          <TodoList />
        </div>
      );
    }

    export default Home;
