import Base from './components/Base';
import './App.css';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/footer';

function App() {

  return (
   <div className='APP'>
     <NavBar />
     <Banner />
     <Base />
     <Footer />
   
   </div>
  );
}

export default App;
