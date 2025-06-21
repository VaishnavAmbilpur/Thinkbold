
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router'
import Hompage from './Pages/Hompage'
import CreatePage from './Pages/CreatePage'
import NoteDetail from './Pages/NoteDetail'
import toast from 'react-hot-toast'

function App() {

  return (
    <div className='bg-base-200 min-h-screen min-w-screen' data-theme="light">
      <Routes>
        <Route path="/" element={<Hompage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
        <Route path="/notes/:id" element={<NoteDetail/>}></Route>
      </Routes>
    </div>
  )
}

export default App
