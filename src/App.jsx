import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Header from "./components/Header/Header"
import { HOME_PAGE, MOVIES_PAGE } from './common/routes';


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path={HOME_PAGE} element={<Home />}></Route>
        <Route path={MOVIES_PAGE} element={<Movies />}></Route>
      </Routes>
    </>
  )
}

export default App
