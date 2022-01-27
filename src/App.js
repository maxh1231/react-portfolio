import React, { useState } from 'react';
import './App.css';
import About from './components/About/About'
import Projects from './components/Projects';

const projects = [
  {
    id: 1,
    title: 'Travel Agent',
    img: '',
    disc: 'Plan easy travel by viewing hotel and weather information in a given area.',
    repo: 'https://github.com/maxh1231/travel-agent',
    live: 'https://maxh1231.github.io/travel-agent/'
  },
  {
    id: 2,
    title: '#1Fan',
    img: '',
    disc: 'Music hub to listen, share and favorite your favorite songs and artists.',
    repo: 'https://github.com/maxh1231/no1fan',
    live: 'https://no1fan.herokuapp.com/'
  },
  {
    id: 3,
    title: 'Meet Landing Page',
    img: '',
    disc: 'Landing page for the Meet application',
    repo: 'https://github.com/maxh1231/meet-landing-page',
    live: 'https://maxh1231.github.io/meet-landing-page/'
  },
  {
    id: 4,
    title: 'Weather Dashbaord',
    img: '',
    disc: 'Weather forecast in a given city.',
    repo: 'https://github.com/maxh1231/weather-dashboard',
    live: 'https://maxh1231.github.io/weather-dashboard/'
  },
  {
    id: 5,
    title: 'Social Network API',
    disc: 'Social Media API back-end. Create accounts, add friends, share thoughts, add reactions to thoughts.',
    repo: 'https://github.com/maxh1231/social-network-api',
    live: 'Not deployed',
  },
  {
    id: 6,
    title: 'Tech Blog',
    disc: 'Reddit esq tech blog, create and share tech posts, discuss tech with other users via comments',
    repo: 'https://github.com/maxh1231/tech-blog',
    live: 'https://maxh-techblog.herokuapp.com/'
  }

]

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Projects />
    }
    if (currentPage === 'Resume') {
      return // resume component
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
