import './App.css'
import Socialmedias from './components/home/Socialmedias'
import Welcome from './components/home/Welcome'
import Navegationbar from './components/navbar/Navegationbar'
import CardsList from './components/proyects/CardsList'
function App() {

  return (
    <div>
      <Navegationbar />
      <main>
        <section id='home'>
          <Welcome/>
          <Socialmedias/>
        </section>
        <section id='proyect'>
          <CardsList/>
        </section>
      </main>
    </div>
  )
}

export default App
