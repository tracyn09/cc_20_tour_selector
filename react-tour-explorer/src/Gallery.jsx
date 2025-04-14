import TourCard from './TourCard'

function Gallery({ tours, selected, onRemove }) {
  const filteredTours =
    selected === 'All'
      ? tours
      : tours.filter((tour) => tour.name === selected)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  )
}

export default Gallery
