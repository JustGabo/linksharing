import {Create} from './pages/create'
// import {Render} from './components/render'
import {LinksProvider} from './context/links'
import {ActiveSectProvider} from './context/active-sect'
import {ProfileProvider} from './context/profile-Context'
import {Preview} from './pages/preview' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing} from './pages/landing'
import {Search} from './pages/search'


function App() {
  return (
    <BrowserRouter>
    <ActiveSectProvider>
    <LinksProvider>
    <ProfileProvider>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='preview' element={<Preview/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </ProfileProvider>
    </LinksProvider>
    </ActiveSectProvider>
    </BrowserRouter>
  )
}

export default App