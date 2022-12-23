import './App.css'
import Contact from './components/contact/Contact'
import Socialmedias from './components/home/Socialmedias'
import Welcome from './components/home/Welcome'
import Navegationbar from './components/navbar/Navegationbar'
import CardsList from './components/proyects/CardsList'
import Skill from './components/skill/Skill'
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
        <section id='skill-contact'>
          <Skill/>
        </section>
        <section id='contact'>
          <Contact/>
        </section>
      </main>
      <footer>
        <div>
          <a href="">about me</a>
        </div>
      </footer>
    </div>
  )
}

export default App
