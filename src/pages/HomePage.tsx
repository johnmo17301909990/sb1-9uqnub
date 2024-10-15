import React, { useState } from 'react';
import CarList from '../components/CarList';
import SearchBar from '../components/SearchBar';
import FilterOptions from '../components/FilterOptions';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">欢迎来到二手车交易平台</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <FilterOptions filters={filters} onFilterChange={handleFilterChange} />
        </div>
        <div className="md:w-3/4">
          <CarList searchTerm={searchTerm} filters={filters} />
        </div>
      </div>
    </>
  );
};

export default HomePage;