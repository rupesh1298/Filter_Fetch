import {useEffect,useState} from 'react'

function FilterData(){
     const initialData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
  ];

  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(data);
  const [filterId, setFilterId] = useState('');

  const handleFilterChange = (e) => {
    setFilterId(e.target.value);
  };

  const handleFilterSubmit = () => {
    const filtered = data.filter((item) => item.id === parseInt(filterId, 10));
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Data Filter</h1>
      <div>
        <label htmlFor="filterId">Filter by ID:</label>
        <input
          type="number"
          id="filterId"
          value={filterId}
          onBlur={handleFilterChange}
        />
        <button onClick={handleFilterSubmit}>Filter</button>
      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterData
