const myCities = [
  { name: 'Lublin', lat: 51.15, lng: 22.34 },
  { name: 'Rzeszów', lat: 50.0409, lng: 21.9992 },
  { name: 'Łódź', lat: 51.45, lng: 19.27 },
  { name: 'Kraków', lat: 50.06465, lng: 19.94498 },
  { name: 'Warszawa', lat: 52.14, lng: 21.0 },
  { name: 'Szczecin', lat: 53.25, lng: 14.35 },
];

const api = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(myCities);
      }, 1500);
    });
  },
};

export default api;
