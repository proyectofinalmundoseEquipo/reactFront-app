import './App.scss';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Products from "./components/Products/Products"
import Services from "./components/Services/Services"
import Contact from "./containers/Contact/Contact"
import Footer from "./components/Footer/Footer"
// nueva prueba
const App = ()=> {
  return (
    <div className="App">
       <Header/>
       <Hero/>
       <About/>
       <Products/>
       <Services/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
