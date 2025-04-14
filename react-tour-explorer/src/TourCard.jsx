function TourCard({ tour, onRemove }) {
    const { id, name, info, image, price } = tour
  
//Presenting image, name, price, and including Not Interested button
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', width: '300px' }}>
        <img src={image} alt={name} style={{ width: '100%' }} />
        <h2>{name}</h2>
        <p>{info.slice(0, 100)}...</p>
        <p><strong>Price:</strong> ${price}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button> 
      </div>
    )
  }
  
  export default TourCard
  