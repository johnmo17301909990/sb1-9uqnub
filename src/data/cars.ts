export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  image: string;
  description: string;
}

export const cars: Car[] = [
  {
    id: 1,
    brand: '丰田',
    model: '卡罗拉',
    year: 2019,
    price: 120000,
    mileage: 30000,
    fuelType: '汽油',
    transmission: '自动',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: '这辆丰田卡罗拉车况良好，定期保养，适合家庭使用。配备了最新的安全系统和娱乐设备，燃油经济性出色。'
  },
  {
    id: 2,
    brand: '本田',
    model: '雅阁',
    year: 2020,
    price: 180000,
    mileage: 20000,
    fuelType: '汽油',
    transmission: '自动',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: '本田雅阁是一款中型轿车的典范，舒适性和性能兼具。这辆车配备了Honda Sensing安全套件，让您的驾驶更加安心。'
  },
  {
    id: 3,
    brand: '大众',
    model: '帕萨特',
    year: 2018,
    price: 150000,
    mileage: 40000,
    fuelType: '柴油',
    transmission: '手动',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: '大众帕萨特以其出色的德国工艺和驾驶体验而闻名。这辆车配备了先进的信息娱乐系统和舒适的内饰，是商务人士的理想之选。'
  },
  {
    id: 4,
    brand: '奔驰',
    model: 'C级',
    year: 2021,
    price: 300000,
    mileage: 10000,
    fuelType: '汽油',
    transmission: '自动',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: '奔驰C级代表了豪华与性能的完美结合。这辆车配备了最新的MBUX信息娱乐系统，内饰豪华，驾驶感受一流。'
  },
  {
    id: 5,
    brand: '宝马',
    model: '3系',
    year: 2020,
    price: 280000,
    mileage: 25000,
    fuelType: '汽油',
    transmission: '自动',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: '宝马3系是运动型轿车的代表作，这辆车完美平衡了运动性能和日常实用性。配备了宝马最新的iDrive系统，操控感一流。'
  },
];