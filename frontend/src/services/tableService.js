import api from './api';

const tableService = {
  getAllTables: () => {
    return api.get('/tables');
  },
  
  getTableStatus: () => {
    return api.get('/tables/status');
  },
  
  getTableDetails: (tableName) => {
    return api.get(`/tables/${tableName}`);
  }
};

export default tableService;