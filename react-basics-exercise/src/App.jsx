import React from 'react';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Login from './components/Login';
import Card from './components/Card';
import Accordion from './components/Accordion';
import TodoApp from './components/todo/TodoApp';

const App = () => {
  const user1 = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  const user2 = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://i.imgur.com/MK3eW3As.jpg',
    imageSize: 90,
  };

  return (
    <div className="app">
      <h1>🚀 React Lab 3 - Complete Solution</h1>
      
      <section className="section">
        <h2>Part II: User Profile Components</h2>
        <div className="grid">
          <Card title="User Profile 1 (Light Theme)">
            <UserProfile userData={user1} theme="light" />
          </Card>
          <Card title="User Profile 2 (Dark Theme)">
            <UserProfile userData={user2} theme="dark" />
          </Card>
        </div>
      </section>

      <section className="section">
        <h2>Part III: State and Interactivity</h2>
        <div className="grid">
          <Card title="Counter Exercise">
            <Counter />
          </Card>
          <Card title="Login Form Exercise">
            <Login />
          </Card>
        </div>
      </section>

      <section className="section">
        <h2>Part IV: Accordion (Lifting State Up)</h2>
        <Card title="Accordion Example">
          <Accordion />
        </Card>
      </section>

      <section className="section">
        <h2>Part VI: Capstone Project - Todo List</h2>
        <Card title="Todo Application">
          <TodoApp />
        </Card>
      </section>
    </div>
  );
};

export default App;