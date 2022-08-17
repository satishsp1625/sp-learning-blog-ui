import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Article from './components/Article';
import Header from "./components/Header";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <MDBContainer fluid>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article" element={<Article/>}/>
      </Routes>
      </MDBContainer>
    </Router>
  );
}

export default App;
