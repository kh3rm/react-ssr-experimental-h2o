import './App.css';
import TextEditor from './components/TextEditor';
import Header from './view-components/Header';
import Footer from './view-components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
      <h2>(First React Experimental Build)</h2>
      <br></br>
      <TextEditor />
      </main>
      <Footer />
    </div>
  );
}

export default App;
