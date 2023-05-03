import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Resume from './Components/Resume/Resume'
import Testimonials from './Components/Tetimonial/Testimonials'
import Blog from './Components/Blog/Blog'
import Pricing from './Components/Pricing/Pricing'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import './App.css'

const App = () => {
  return (
    <>
    
    <Sidebar></Sidebar>

    <main className='main'>
    <Home></Home>
     <About></About>
     <Portfolio></Portfolio>
     <Services></Services>
     <Resume></Resume>
      <Pricing></Pricing>
     <Testimonials></Testimonials>
     <Blog></Blog>
     <Contact></Contact>
     </main>

    </>
  )
}

export default App