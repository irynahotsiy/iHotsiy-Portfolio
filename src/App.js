import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Skills from './components/Skills/Skills';
import Courses from './components/Courses/Courses';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import { db } from "./db";


import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar pages = {db.list}/>
        <Jumbotron />
        <Skills skills = {db.box}/>
        <Courses courses = {db.courses}/>
        <Portfolio projects={db.projects}/>
        <Contacts social={db.social}/>
        <Footer />
     </>
    );
  }
}

export default App;
