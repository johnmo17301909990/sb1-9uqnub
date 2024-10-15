import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cars } from '../data/cars';
import CommentSystem from '../components/CommentSystem';
import { Share2 } from 'lucide-react';

const CarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find(c => c.id === parseInt(id || ''));
  const [showShareUrl, setShowShareUrl] = useState(false);

  if (!car) {
    return <div>车辆未找到</div>;
  }

  const initialComments = [
    { id: 1, username: '张三', content: '这辆车性能很好，我很满意！', rating: 5, date: '2024-03-01' },
    { id: 2, username: '李四', content: '价格合理，但内饰可以再好一点。', rating: 4, date: '2024-03-02' },
  ];

  const shareUrl = `${window.location.origin}/car/${car.id}`;

  const handleShareClick = () => {
    setShowShareUrl(true);
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('链接已复制到剪贴板！');
    }, (err) => {
      console.error('无法复制链接: ', err);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-64 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{car.brand} {car.model}</h1>
          <button 
            onClick={handleShareClick}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            <Share2 size={20} className="mr-2" />
            分享
          </button>
        </div>
        {showShareUrl && (
          <div className="mb-4 p-2 bg-gray-100 rounded">
            <p className="text-sm text-gray-600">分享链接：</p>
            <p className="text-blue-500 break-all">{shareUrl}</p>
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">年份：{car.year}</p>
            <p className="text-gray-600">价格：¥{car.price.toLocaleString()}</p>
            <p className="text-gray-600">里程：{car.mileage.toLocaleString()} 公里</p>
          </div>
          <div>
            <p className="text-gray-600">燃料类型：{car.fuelType}</p>
            <p className="text-gray-600">变速箱：{car.transmission}</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">车辆描述</h2>
          <p className="text-gray-700">{car.description}</p>
        </div>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
          联系卖家
        </button>
        <CommentSystem carId={car.id} initialComments={initialComments} />
      </div>
    </div>
  );
};

export default CarDetailPage;