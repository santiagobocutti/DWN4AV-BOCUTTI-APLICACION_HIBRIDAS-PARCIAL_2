
import { Routes , Route } from 'react-router-dom'
import { Camisetas, ChooseClub, Clubes, CreateCamisetas, CreateClubes, DetailCamisetas, DetailClubes, Home, Login, Register } from './pages'
import ProtectedRoutes from './utils/ProtectedRoutes'
import { Footer, Navbar } from './components'

function App() {


  return (
    <>

<Navbar/>
    
<Routes>
  <Route element={<ProtectedRoutes/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/camisetas" element={<Camisetas/>}/>
      <Route path="/camisetas/create" element={<ChooseClub/>}/>
      <Route path="/camisetas/create/:id" element={<CreateCamisetas/>}/>
      <Route path="/camisetas/buscar_id/:id" element={<DetailCamisetas/>}/>
      <Route path="/clubes" element={<Clubes/>}/>
      <Route path="/clubes/create" element={<CreateClubes/>}/>
      <Route path="/clubes/buscar_id/:id" element={<DetailClubes/>}/> 
  </Route>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
</Routes>

<Footer/>

    </>
  )
}

export default App
