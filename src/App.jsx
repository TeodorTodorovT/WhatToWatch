import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Header from "./components/Header/Header"
import { HOME_PAGE } from './common/routes';


function App() {


  return (
    <>
      <Header></Header>
      <Routes>
        <Route path={HOME_PAGE} element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
