import {Header} from './components/header'
// import {Render} from './components/render'
import {LinksProvider} from './context/links'
import {ActiveSectProvider} from './context/active-sect'
import {ProfileProvider} from './context/profile-Context'

function App() {
  return (
    <ActiveSectProvider>
    <LinksProvider>
    <ProfileProvider>
    <div className='mt-8 '>
      <Header/>
      {/* <Render/> */}
    </div>
    </ProfileProvider>
    </LinksProvider>
    </ActiveSectProvider>
  )
}

export default App