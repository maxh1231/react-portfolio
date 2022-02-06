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
import passGen from './passgen.PNG'
import techblog from './techblog.PNG'

const projects = [
  {
    id: 1,
    title: '#1Fan',
    img: no1fan,
    disc: 'Music hub to listen, share and favorite your favorite songs and artists. Group project, built with Node.Js, Tailwind.Css, Express.Js, mySQL and Sequelize ODM. Deployed to Heroku.',
    repo: 'https://github.com/maxh1231/no1fan',
    live: 'https://no1fan.herokuapp.com/'
  },
  {
    id: 2,
    title: 'Meet Landing Page',
    img: meet,
    disc: 'HTML and CSS challenge for the popular frontendmentor website. The challenge provides you images, hex color codes, and a wireframe. Showcases my CSS skills. ',
    repo: 'https://github.com/maxh1231/meet-landing-page',
    live: 'https://maxh1231.github.io/meet-landing-page/'
  },
  {
    id: 3,
    title: 'Travel Agent',
    img: travelAgent,
    disc: 'An application that assists you in making travel plans. Displays weather information and hotel information in a given city. Built with vanilla JavaScript, Moment.Js, HTML and CSS.',
    repo: 'https://github.com/maxh1231/travel-agent',
    live: 'https://maxh1231.github.io/travel-agent/'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    img: dashboard,
    disc: 'An application that provides you the current weather information including wind speed, humidity percentage, and UV index. Additionally displays the upcoming 5-day weather forecast. Built with vanilla JavaScript, Moment.JS, 3 3rd party APIs, HTML and CSS. ',
    repo: 'https://github.com/maxh1231/weather-dashboard',
    live: 'https://maxh1231.github.io/weather-dashboard/'
  },
  {
    id: 5,
    title: 'Tech Blog',
    img: techblog,
    disc: 'Forum application that allows user accounts to be created and logged into. Logged in users are able to view their dashboard containing posts created by them. Additionally, logged in users are able to comment on posts. Built with Node.Js, CSS, Express.js, mySQL and Sequelize ODM. Deployed to Heroku. ',
    repo: 'https://github.com/maxh1231/tech-blog',
    live: 'https://maxh-techblog.herokuapp.com/'
  },
  {
    id: 6,
    title: 'Password Generator',
    img: passGen,
    disc: 'Application that generates a random password based on a given set of criteras. Users have the ability to choose the length of the password, include numbers and special characters, and lowercase and uppercase letters if indicated. Built with vanilla javaScript. ',
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
