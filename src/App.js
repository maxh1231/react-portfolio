import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Projects from './components/Project/Projects'
import Contact from './components/Contact/Contact'

const projects = [
  {
    id: 1,
    title: 'Travel Agent',
    img: '',
    disc: 'Plan easy travel by viewing hotel and weather information in a given area.'
  },
  {
    id: 2,
    title: '#1Fan',
    img: '',
    disc: 'Music hub to listen, share and favorite your favorite songs and artists.'
  }]

function App() {

  return (
    <div className="App">
      <Header />
      <Footer />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
