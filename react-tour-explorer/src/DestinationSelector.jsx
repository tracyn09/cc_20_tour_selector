function DestinationSelector({ tours, selected, setSelected }) {
    const destinations = ['All', ...new Set(tours.map((tour) => tour.name))]
  
    return (
      <div>
        <label htmlFor="destinations">Choose a destination: </label>
        <select
          id="destinations"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {destinations.map((dest, idx) => (
            <option key={idx} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </div>
    )
  }
  
  export default DestinationSelector
  