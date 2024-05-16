import Info from './components/info.jsx'
import Education from './components/education.jsx'
import Experience from './components/experience.jsx'
import CV from './components/cv.jsx'
import '../src/App.css'

function App() {
  const info = new Info();
  const education = new Education();
  const experience = new Experience();
  const cv = new CV();

  return (
    <>
    <div className='page'>
      <div className='left'>
        {info}
        {education}
        {experience}
      </div>
      <div className='right'>
        {cv}
      </div>
    </div>
    </>
  )
}

export default App
