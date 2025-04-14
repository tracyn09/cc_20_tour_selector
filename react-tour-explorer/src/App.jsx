import { useState, useEffect } from 'react'
import DestinationSelector from './DestinationSelector' //passing selected destinination
import Gallery from './Gallery'



//useState to store tours, pass loading, and error
function App() {
  const [tours, setTours] = useState([])      
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)   
  const [selectedDestination, setSelectedDestination] = useState('All')  

  //remove tour
  const handleRemove = (id) => {
    setTours(tours.filter((tour) => tour.id !== id))
  }
  
  //refresh tours
  const handleRefresh = () => {
    setRefresh(!refresh)
  }
  
  const [refresh, setRefresh] = useState(false)


//Fetch tours from API using useEffect
  useEffect(() => {
    setLoading(true)
    fetch('https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project')
      .then((res) => res.json())
      .then((data) => {
        setTours(data)
        setErrors(null)
        setLoading(false)
      })


      .catch(() => {
        setError('Error detected')
        setLoading(false)
      })
  }, [refresh])
  

  return (
    <div>
      <h1>Available Tours</h1>
      {loading && <p>Loading tours...</p>}
      {error && <p>{error}</p>}
      {!loading && <p>{tours.length} tours available.</p>}
      {!loading && <DestinationSelector tours={tours} selected={selectedDestination} setSelected={setSelectedDestination} />}
      
      <Gallery tours={tours} selected={selectedDestination} onRemove={handleRemove}/>
      {!loading && tours.length === 0 && (
    <div>
      <p>No tours left. Refresh to reload.</p>
      <button onClick={handleRefresh}>Refresh</button> 
    </div>
)}
    </div>
  )
}

export default App
