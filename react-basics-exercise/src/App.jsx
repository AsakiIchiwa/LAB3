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
    imageSize: 100,
  };

  const user2 = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://i.imgur.com/MK3eW3As.jpg',
    imageSize: 100,
  };

  return (
    <div className="app">
      <div className="starfield"></div>
      
      <header className="main-header">
        <div className="header-emblem">⚔️</div>
        <h1>Lab 3 React</h1>
        <div className="header-emblem">⚔️</div>
      </header>

      <main className="content">
        <section className="section">
          <h2 className="section-title">
            <span>◆</span> Character Profiles <span>◆</span>
          </h2>
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
          <h2 className="section-title">
            <span>◆</span> Power & Guild <span>◆</span>
          </h2>
          <div className="grid">
            <Card title="💪 Power System">
              <Counter />
            </Card>
            <Card title="🏰 Guild Entrance">
              <Login />
            </Card>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">
            <span>◆</span> Knowledge <span>◆</span>
          </h2>
          <Card title="Sacred Texts">
            <Accordion />
          </Card>
        </section>

        <section className="section">
          <h2 className="section-title">
            <span>◆</span> Quest System <span>◆</span>
          </h2>
          <Card title="📋 Mission Log">
            <TodoApp />
          </Card>
        </section>
      </main>
    </div>
  );
};

export default App;