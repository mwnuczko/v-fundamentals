import api from '../api/index';

const realEstatesService = {
  selectedRealEstate: null,
  realEstates: [],

  fetch() {
    // DONE
    return api.getAll().then((estates) => {
      this.realEstates = estates;
    });
  },

  toggleRealEstate(estate) {
    // DONE
    console.log('toggleRealEstate', estate);
    if (this.selectedRealEstate === estate)  {
      this.selectedRealEstate = null;
    } else {
      this.selectedRealEstate = estate;
    }
  },

  reset() {
  },
};

export default realEstatesService;
