import React from 'react';
import { Link } from 'react-router-dom';
import { Car, cars } from '../data/cars';

interface CarListProps {
  searchTerm: string;
  filters: {
    brand: string;
    minPrice: string;
    maxPrice: string;
    minYear: string;
    maxYear: string;
  };
}

const CarList: React.FC<CarListProps> = ({ searchTerm, filters }) => {
  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.year.toString().includes(searchTerm);
    
    const matchesBrand = !filters.brand || car.brand === filters.brand;
    const matchesMinPrice = !filters.minPrice || car.price >= parseInt(filters.minPrice);
    const matchesMaxPrice = !filters.maxPrice || car.price <= parseInt(filters.maxPrice);
    const matchesMinYear = !filters.minYear || car.year >= parseInt(filters.minYear);
    const matchesMaxYear = !filters.maxYear || car.year <= parseInt(filters.maxYear);

    return matchesSearch && matchesBrand && matchesMinPrice && matchesMaxPrice && matchesMinYear && matchesMaxYear;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCars.map((car) => (
        <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{car.brand} {car.model}</h3>
            <p className="text-gray-600">{car.year}年 | ¥{car.price.toLocaleString()}</p>
            <p className="text-gray-600">{car.mileage.toLocaleString()} 公里 | {car.fuelType} | {car.transmission}</p>
            <Link to={`/car/${car.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              查看详情
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;