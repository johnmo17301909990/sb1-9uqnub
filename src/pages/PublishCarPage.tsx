import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PublishCarPage: React.FC = () => {
  const navigate = useNavigate();
  const [carData, setCarData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCarData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitted car data:', carData);
    alert('车辆发布成功！');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">发布车辆</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">品牌</label>
          <input type="text" id="brand" name="brand" value={carData.brand} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">型号</label>
          <input type="text" id="model" name="model" value={carData.model} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">年份</label>
          <input type="number" id="year" name="year" value={carData.year} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">价格</label>
          <input type="number" id="price" name="price" value={carData.price} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">里程</label>
          <input type="number" id="mileage" name="mileage" value={carData.mileage} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700">燃料类型</label>
          <select id="fuelType" name="fuelType" value={carData.fuelType} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option value="">选择燃料类型</option>
            <option value="汽油">汽油</option>
            <option value="柴油">柴油</option>
            <option value="电动">电动</option>
            <option value="混合动力">混合动力</option>
          </select>
        </div>
        <div>
          <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">变速箱</label>
          <select id="transmission" name="transmission" value={carData.transmission} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option value="">选择变速箱类型</option>
            <option value="自动">自动</option>
            <option value="手动">手动</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">描述</label>
          <textarea id="description" name="description" value={carData.description} onChange={handleChange} rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          发布车辆
        </button>
      </form>
    </div>
  );
};

export default PublishCarPage;