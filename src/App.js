import { useState } from 'react'


import Welcome from "./windows/Welcome";
import Info from './windows/Info';
import Navigate from './windows/Navigate';
import Links from './windows/Links';
import Skills from './windows/Skills';
import Projects from './windows/Projects';
import Education from './windows/Education';
import Experience from './windows/Experience';

function App() {

  const [windows, setWindows] = useState({welcome: true})

  const updateWindows = newWindows => (
    () => {
      setWindows(o => {
        const nw = { ...o, ...newWindows }
        if (!Object.values(nw).includes(true)) nw.welcome = true
        return nw
      })
    }
  )

  return (
    <div style={{ overflowX: 'auto' }}>

      <Welcome show={windows.welcome}
        handelClose={updateWindows({ welcome: false })}
        buttons={{
          handelNext: updateWindows({ welcome: false, info: true })
        }} />

      <Info show={windows.info}
        handelClose={updateWindows({ info: false })}
        buttons={{
          handelNext: updateWindows({ info: false, links: true }),
          handelNavigate: updateWindows({ info: false, navigate: true })
        }} />

      <Navigate show={windows.navigate}
        handelClose={updateWindows({ navigate: false })}
        buttons={{
          handelNext: updateWindows({ navigate: false }),
          info: updateWindows({ info: true }),
          links: updateWindows({ links: true }),
          skills: updateWindows({ skills: true }),
          projects: updateWindows({ projects: true }),
          education: updateWindows({ education: true }),
          experience: updateWindows({ experience: true }),
        }} />

      <Links show={windows.links}
        handelClose={updateWindows({ links: false })}
        buttons={{
          handelNext: updateWindows({ links: false, skills: true }),
          handelBack: updateWindows({ links: false, info: true })
        }} />

      <Skills show={windows.skills}
        handelClose={updateWindows({ skills: false })}
        buttons={{
          handelNext: updateWindows({ skills: false, projects: true }),
          handelBack: updateWindows({ skills: false, links: true })
        }} />

      <Projects show={windows.projects}
        handelClose={updateWindows({ projects: false })}
        buttons={{
          handelNext: updateWindows({ projects: false, education: true }),
          handelBack: updateWindows({ projects: false, skills: true })
        }} />

      <Education show={windows.education}
        handelClose={updateWindows({ education: false })}
        buttons={{
          handelNext: updateWindows({ education: false, experience: true }),
          handelBack: updateWindows({ education: false, projects: true })
        }} />
      <Experience show={windows.experience}
        handelClose={updateWindows({ experience: false })}
        buttons={{
          handelNext: updateWindows({ experience: false, navigate: true }),
          handelBack: updateWindows({ experience: false, education: true })
        }} />


    </div>
  );
}

export default App;

/*
  Windows:
    - Welcome #
    - Info #
    - Skills
    - Education
    - Certificates
    - Projects
    - Links
*/