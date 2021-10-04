import './App.css';

// COMPONETS
import { Header } from './components/Header/index';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

// PAGES


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
