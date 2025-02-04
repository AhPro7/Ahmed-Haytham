import CustomWindow from "../sub/CustomWindow";
import { SKILLS } from "../const";
import { Tools } from "../const";
export default function Skills({ show, handelClose, buttons: { handelNext, handelBack } }) {

    const calcSize = () => {
        const height = window.innerHeight * 0.7;
        const width = height * 1.5;

        const x = window.innerWidth / 2 - width / 2
        const y = window.innerHeight / 2 - height / 2

        return [width, height, x, y]
    }

    const body_style = { fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }

    return (
        <CustomWindow title='skills' calcSize={calcSize} body_style={body_style} show={show} handelClose={handelClose}>

            <p style={{
                border: '2px solid #222',
                padding: '0.5em 2em',
                boxShadow: '0.5em 0.5em #000',
                marginRight: '0.5em'
            }}>Skills</p>

            <div className="skills">
                {SKILLS.map(skill => (
                    <span key={skill.anchor + skill} className="cell">{skill}</span>
                ))}
            </div>
            <p style={{
                border: '2px solid #222',
                padding: '0.5em 2em',
                boxShadow: '0.5em 0.5em #000',
                marginRight: '0.5em'
            }}>Tools</p>


            <div className="skills">
                {Tools.map(skill => (
                    <span key={skill.anchor + skill} className="cell">{skill}</span>
                ))}
            </div>



            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1em'
            }}>
                <button onClick={handelBack} className="page-button">Back (Links)</button>
                <button onClick={handelNext} className="page-button">Next (Projects)</button>
            </div>
        </CustomWindow>
    )
}
