import React from 'react';
import '../../styles/Portfolio.css';
import Project from './Project.js'
import doggy from '../../images/doggydaze.png'
import movie from '../../images/moviesearch.png'
import weather from '../../images/weather.png'
import text from '../../images/textedit.png'
import blog from '../../images/techblog.png'
import calendar from '../../images/planner.png'
export default function Portfolio() {
  return (
    <div className='Portfoliocontainer'>
      <div>
        <h2>Portfolio</h2>
        <h3>
          Here are my projects
        </h3>


      </div>
      <div className='projectcontainer'>
        <div>
          <Project name="Doggydaze" img={doggy} details="app to find establishments for you and your dog!" link="https://ancient-plains-63296.herokuapp.com/" repo="https://github.com/RosalvaMartinez/doggydaze" />
        </div>
        <div>
          <Project name="Movie Search Application" img={movie} details="app to search and find details on movies" link="https://calebcarnett.github.io/Movie-Search-Application/" repo="https://github.com/calebcarnett/Movie-Search-Application" />
        </div>
        <div>
          <Project name="Kaikanes-weather-dashboard" img={weather} details="App that uses weather api to get weather on searched city" link="https://lacnoskillz.github.io/Kaikanes-weather-dashboard/" repo="https://github.com/lacnoskillz/Kaikanes-weather-dashboard" />
        </div>
        <div>
          <Project name="Kaikanes-Text-editor" img={text} details="save notes using indexedDB that can function without internet" link="https://kaikanes-text-editor.herokuapp.com/" repo="https://github.com/lacnoskillz/Kaikanes-Text-editor" />
        </div>
        <div>
          <Project name="Kaikanes-tech-blog" img={blog} details="Blog site where people can login and create/comment on blogs" link="https://whispering-everglades-18227.herokuapp.com/" repo="https://github.com/lacnoskillz/Kaikanes-tech-blog" />
        </div>
        <div>
          <Project name="Kaikanes-calendar-application" img={calendar} details="add important events to a planner to help manage time" link="https://lacnoskillz.github.io/Kaikanes-calendar-application/" repo="https://github.com/lacnoskillz/Kaikanes-calendar-application" />
        </div>
      </div>

    </div>
  );
}
