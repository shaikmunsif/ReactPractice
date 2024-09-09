
import './App.css'
import Card from './components/Card'

function App() {

  let details = {
    name: 'Jasmine Wright',
    bio: "This is Jasmine Wrights Bio"
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Text</h1>
      <Card username="Jasmine Wright"  bio={details}></Card>
    </>
  )
}

export default App
