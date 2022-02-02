import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import travelAgent from './travelagent.PNG'
import no1fan from './no1fan.PNG'
import meet from './meet.PNG'
import dashboard from './weather-dashboard.PNG'
import passGen from './passgen.PNG'
import techblog from './techblog.PNG'

const projects = [
  {
    id: 1,
    title: '#1Fan',
    img: no1fan,
    disc: 'Music hub to listen, share and favorite your favorite songs and artists.',
    repo: 'https://github.com/maxh1231/no1fan',
    live: 'https://no1fan.herokuapp.com/'
  },
  {
    id: 2,
    title: 'Meet Landing Page',
    img: meet,
    disc: 'Landing page for the Meet application, Landing page for the Meet application, Landing page for the Meet application, ',
    repo: 'https://github.com/maxh1231/meet-landing-page',
    live: 'https://maxh1231.github.io/meet-landing-page/'
  },
  {
    id: 3,
    title: 'Travel Agent',
    img: travelAgent,
    disc: 'Plan easy travel by viewing hotel and weather information in a given area.',
    repo: 'https://github.com/maxh1231/travel-agent',
    live: 'https://maxh1231.github.io/travel-agent/'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    img: dashboard,
    disc: 'Weather forecast in a given city. Weather forecast in a given city. Weather forecast in a given city. Weather forecast in a given city.',
    repo: 'https://github.com/maxh1231/weather-dashboard',
    live: 'https://maxh1231.github.io/weather-dashboard/'
  },
  {
    id: 5,
    title: 'Tech Blog',
    img: techblog,
    disc: 'Reddit esq tech blog, create and share tech posts, discuss tech with other users via comments',
    repo: 'https://github.com/maxh1231/tech-blog',
    live: 'https://maxh-techblog.herokuapp.com/'
  },
  {
    id: 6,
    title: 'Password Generator',
    img: passGen,
    disc: 'Generate a password based on a given critera. Set length of password and types of characters.',
    repo: 'https://github.com/maxh1231/password-generator',
    live: 'https://maxh1231.github.io/password-generator/',
  }
]

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Projects projects={projects} />
    }
    if (currentPage === 'Resume') {
      return // resume component
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
  }

  // const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className="App ">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
