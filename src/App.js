import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import travelAgent from './travelagent.PNG'
import no1fan from './no1fan.PNG'
import meet from './meet.PNG'
import dashboard from './weather-dashboard.PNG'
import type from './typeplusplus.png'
import techblog from './techblog.PNG'

const projects = [
  {
    id: 1,
    title: 'Type++',
    img: type,
    disc: 'Full Stack MERN application. Utilizing several NPM packages to display a clean user interface. Type++ is a gamified typing test application. Built with GraphQL and Tailwind.CSS',
    repo: 'https://github.com/maxh1231/type-Plus-Plus',
    live: 'https://typeplusplus.herokuapp.com/',
  },
  {
    id: 2,
    title: '#1Fan',
    img: no1fan,
    disc: 'Music hub to listen, share and favorite your favorite songs and artists. Group project, built with Node.Js, Tailwind.Css, Express.Js, mySQL and Sequelize ODM. Deployed to Heroku.',
    repo: 'https://github.com/maxh1231/no1fan',
    live: 'https://no1fan.herokuapp.com/'
  },
  {
    id: 3,
    title: 'Meet Landing Page',
    img: meet,
    disc: 'HTML and CSS challenge for the popular frontendmentor website. The challenge provides you images, hex color codes, and a wireframe. Showcases my CSS skills. ',
    repo: 'https://github.com/maxh1231/meet-landing-page',
    live: 'https://maxh1231.github.io/meet-landing-page/'
  },
  {
    id: 4,
    title: 'Travel Agent',
    img: travelAgent,
    disc: 'An application that assists you in making travel plans. Displays weather information and hotel information in a given city. Built with vanilla JavaScript, Moment.Js, HTML and CSS. Initially a front-end application, I have since refactored, added a backend and deployed to heroku.',
    repo: 'https://github.com/maxh1231/travel-agent',
    live: 'https://travagent.herokuapp.com/'
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    img: dashboard,
    disc: 'An application that provides you the current weather information including wind speed, humidity percentage, and UV index. Additionally displays the upcoming 5-day weather forecast. Built with vanilla JavaScript, Moment.JS, 3 3rd party APIs, HTML and CSS. ',
    repo: 'https://github.com/maxh1231/weather-dashboard',
    live: 'https://maxh1231.github.io/weather-dashboard/'
  },
  {
    id: 6,
    title: 'Tech Blog',
    img: techblog,
    disc: 'Forum application that allows user accounts to be created and logged into. Logged in users are able to view their dashboard containing posts created by them. Additionally, logged in users are able to comment on posts. Built with Node.Js, CSS, Express.js, mySQL and Sequelize ODM. Deployed to Heroku. ',
    repo: 'https://github.com/maxh1231/tech-blog',
    live: 'https://maxh-techblog.herokuapp.com/'
  },
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
      return <Resume />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
  }

  // const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className="App bg-[#e5e5e5] h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
