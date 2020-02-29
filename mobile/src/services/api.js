import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

// baseURL no android
// emulador do android studio = 10.0.2.2
// no genymotion 10.0.3.2
// no usb é o ip da rede
