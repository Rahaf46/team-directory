
import './App.css'
import sarahImage from './assets/sarah.png'
import omarImage from './assets/omar.png'
import linaImage from './assets/lina.png'
import TeamMember from './TeamMember'

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Ahmed',
    position: 'Frontend Developer',
    image: sarahImage,  },
  {
    id: 2,
    name: 'Omar Khalid',
    position: 'UI/UX Designer',
    image: omarImage,
  },
  {
    id: 3,
    name: 'Lina Mohammed',
    position: 'Project Manager',
    image: linaImage,
  },
]

function App() {
  return (
    <main className="team-directory">
      <h1>Team Directory</h1>
      <p>Meet our amazing team</p>

      <div className="team-list">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.id}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        ))}
      </div>
    </main>
  )
}

export default App
