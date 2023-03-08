import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProviderApp } from '../src/context/appContext';

function App() {
  return (
    <ContextProviderApp>
      <div className='App'>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
      </div>
    </ContextProviderApp>
  );
}

export default App;
