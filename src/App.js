import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Introduction from './components/intro/Introduction';
import ProjectList from './components/projectList/ProjectList';
import SkillsList from './components/SkillsList/SkillList'
import React from 'react'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <About/>
      <ProjectList/>
      <SkillsList/>
      <Contact/>
    </div>
  );
}

export default App;
