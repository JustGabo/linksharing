import {Header} from './components/header'
// import {Render} from './components/render'
import {LinksProvider} from './context/links'
import {ActiveSectProvider} from './context/active-sect'

function App() {
  return (
    <ActiveSectProvider>
    <LinksProvider>
    <div className='mt-8 '>
      <Header/>
      {/* <Render/> */}
    </div>
    </LinksProvider>
    </ActiveSectProvider>
  )
}

export default App