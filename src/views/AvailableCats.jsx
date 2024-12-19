import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2' , breed: 'Sphynx' },
  { name: 'Mittens', age: '2' , breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Peterbald' },
  { name: 'Pumpkin', age: '3' , breed: 'Birman' },
  { name: 'Luna', age: '4', breed: 'Abyssinian'},
  { name: 'Simba', age: '2' , breed: 'Bengal'},
  { name: 'Puma', age: '3' , breed: 'Siamese'},
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('All');

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json()))
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleFilterChange = (event) => {
    const selectedBreed = event.target.value;
    setSelectedBreed(selectedBreed);

    if (selectedBreed === 'All') {
      setFilteredCats(cats);
    } else {
      setFilteredCats(cats.filter((cat) => cat.breed === selectedBreed));
    }
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="mb-3">
        <label htmlFor="cat-filter" className="form-label">Filter by breed:</label>
        <select
          id="cat-filter"
          className="form-select"
          value={selectedBreed}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          {[...new Set(availableCats.map((cat) => cat.breed))].map((breed, index) => (
            <option key={index} value={breed}>{breed}</option>
          ))}
        </select>
      </div>

      <div className="mt-2 row row-cols-1 row-cols-md-3 g-5 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}