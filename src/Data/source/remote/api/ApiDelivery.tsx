import axios from 'axios';

const ApiDelivery = axios.create({
  baseURL: 'http://192.168.1.10:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const ApiDeliveryWithImage = axios.create({
  baseURL: 'http://192.168.1.10:3000/api',
  headers: {
    'Content-Type': 'multipart/form-data',
    accept: 'application/json',
  },
});

export { ApiDelivery, ApiDeliveryWithImage };
