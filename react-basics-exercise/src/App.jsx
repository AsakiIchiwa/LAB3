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
      <div className="app-header">
        <h1>⚔️ React Quest: Lab 3 Adventure ⚔️</h1>
      </div>
      
      <section className="section">
        <h2 className="section-title">👥 Character Profiles</h2>
        <div className="grid">
          <Card title="🌟 Warrior Profile">
            <UserProfile userData={user1} theme="light" />
          </Card>
          <Card title="🌙 Shadow Knight">
            <UserProfile userData={user2} theme="dark" />
          </Card>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">⚡ Power & Guild Access</h2>
        <div className="grid">
          <Card title="💪 Power Management">
            <Counter />
          </Card>
          <Card title="🏰 Guild Entrance">
            <Login />
          </Card>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">📚 Ancient Knowledge</h2>
        <Card title="📖 Wisdom Scrolls">
          <Accordion />
        </Card>
      </section>

      <section className="section">
        <h2 className="section-title">🗺️ Quest System</h2>
        <Card title="📜 Active Quests">
          <TodoApp />
        </Card>
      </section>
    </div>
  );
};

export default App;