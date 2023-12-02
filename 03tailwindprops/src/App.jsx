import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>Tailwind css</h1>
      <Card userName="Adarsh"/>
      <Card userName="Mundra"/>
      <Card />
    </>
  )
}

export default App
