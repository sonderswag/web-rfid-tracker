const axios = require('axios');
// const Settings = require('./Settings');

function DataMonitor() {
  this.listeners = []; // these are observers
  axios.get(`http://localhost:8000/status`, (res, err) => {
    console.log(res.data);
    this.status = res.data;
  })

  this.subscribe = (fn) => {
    var _this = this; 
    _this.listeners.push(fn);
  };

  this.unsubscribe =(fn) => {
    this.listeners = this.listeners.filter((item) => item !== fn);
  };

  this.fire = (data) => {
    console.log('fire');
    if (!this.listeners) {
      return;
    }
    this.listeners.forEach((fn) => fn(data));
  };
}


const checkStatus = async (dm) => {
  const res = await axios.get(`http://localhost:8000/status`);
  if (!dm.status || dm.status.time !== res.data.time) {
    dm.status = res.data;
    dm.fire(res.data);
  }
}

const dataMon = new DataMonitor();
checkStatus(dataMon)
setInterval(() => {checkStatus(dataMon)}, 5000);

export default dataMon;
