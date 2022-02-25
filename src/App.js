import { React, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import ContactForm from './components/Contact';
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div>
      <Header>
        {/* <Navigation 
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Navigation> */}
      </Header>
      <main>

      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
