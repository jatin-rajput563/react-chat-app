import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Instant from './components/Instant';
import Solution from './components/Solution';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Nav />
      <Header />
      <Instant />
      <Solution />
      <Footer />
    </>
  )
}

export default App