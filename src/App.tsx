import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './Message';
import Layout from './components/Layout/Layout';
import BridgingSection from './components/Section/BridgingSection';
import AboutSection from './components/Section/AboutSection';
import ServicesSection from './components/Section/ServicesSection';
import PortfolioSection from './components/Section/PortfolioSection';
import MentorcitySection from './components/Section/MentorcitySection';

function App() {
  const [count, setCount] = useState(0)
  const messageText = 'Привет из компонента Message!';

  return (
    <Layout>
      <BridgingSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <MentorcitySection />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Message text={messageText} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  )
}

export default App
