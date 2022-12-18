import './App.css'
import Navegationbar from './components/navbar/Navegationbar'
import Welcome from './components/welcome-section/Welcome'
import Socialmedias from './components/socialmedias/Socialmedias'
function App() {

  return (
    <div>
      <Navegationbar />
      <div id="home-section">
        <Welcome />
        <div id="container-sm">
          <Socialmedias />
        </div>
      </div>
    </div>
  )
}

export default App
