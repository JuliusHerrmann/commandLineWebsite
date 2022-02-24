import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import CommandLineManager from './commandline/CommandLineManager';
import About from './pages/About';
import Clear from './pages/Clear';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Links from './pages/Links';
import Ls from './pages/Ls';
import Mega from './pages/Mega';
import Network from './pages/Network';
import NotFound from './pages/NotFound';
import Party from './pages/Party';
import Projects from './pages/Projects';
import Safe from './pages/Safe';
import Start from './pages/Start';
import Switchy from './pages/Switchy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Start/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/switchy" element={<Switchy/>}/>
          <Route path="/mega" element={<Mega/>}/>
          <Route path="/safe" element={<Safe/>}/>
          <Route path="/party" element={<Party/>}/>
          <Route path="/network" element={<Network/>}/>
          <Route path="/links" element={<Links/>}/>
          <Route path="/clear" element={<Clear/>}/>
          <Route path="/ls" element={<Ls/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
