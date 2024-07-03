import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h3 className='bg-red-400 text-black p-4 rounded-xl'>Bhawuk Arora</h3>
      <Card username="Bhawuk" btnText="Click Me"/>
      <Card username="Bhawuk" btnText="Visit Me"/>
      <Card username="Bhawuk" />
    </>
  )
}

export default App
