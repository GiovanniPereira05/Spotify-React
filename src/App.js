import logo from './logo.svg';
import './Reset.css';
import './App.css';
import Sidebar from './Sidebar/sidebar.js';
import Header from './Header/header.js';
import Main from './Main/main.js';
import Footer from './Footer/footer.js';
 
function App() {
  return (
    <>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App;
