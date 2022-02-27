import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
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

  function SwitchBar(){
    switch (currentCategory) {
      case categories[1]: return (<div>Portfolio</div>)
      case categories[2]: return (<ContactForm></ContactForm>)
      case categories[3]: return (<div>Resume</div>)
      case categories[0]: return (<AboutMe></AboutMe>)
      default: return (<div>"Hi"</div>)
    }
  }
  
  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>

      </Header>
      <main>
        { SwitchBar()
        }
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
