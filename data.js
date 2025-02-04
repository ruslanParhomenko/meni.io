// const fetch = require('node-fetch')



const url = 'https://script.google.com/macros/s/AKfycbxxWdgXf_74TLxFKiDNugxiO9EDQgYn3VJlAIGpvONqYnqkNuDqDtLmSjTzCJqTx2rZyQ/exec'


const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {'Accept':'application/json'}
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  
  fetchData();
  


