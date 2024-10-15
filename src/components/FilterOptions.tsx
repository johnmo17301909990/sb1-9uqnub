import React from 'react';

interface FilterOptionsProps {
  filters: {
    brand: string;
    minPrice: string;
    maxPrice: string;
    minYear: string;
    maxYear: string;
  };
  onFilterChange: (filters: FilterOptionsProps['filters']) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ filters, onFilterChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">筛选选项</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">品牌</label>
          <select
            id="brand"
            name="brand"
            value={filters.brand}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">所有品牌</option>
            <option value="丰田">丰田</option>
            <option value="本田">本田</option>
            <option value="大众">大众</option>
            <option value="奔驰">奔驰</option>
            <option value="宝马">宝马</option>
          </select>
        </div>
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">最低价格</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="¥"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">最高价格</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="¥"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="minYear" className="block text-sm font-medium text-gray-700">最早年份</label>
          <input
            type="number"
            id="minYear"
            name="minYear"
            value={filters.minYear}
            onChange={handleChange}
            placeholder="年份"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="maxYear" className="block text-sm font-medium text-gray-700">最晚年份</label>
          <input
            type="number"
            id="maxYear"
            name="maxYear"
            value={filters.maxYear}
            onChange={handleChange}
            placeholder="年份"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;