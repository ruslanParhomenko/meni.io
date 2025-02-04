const salad1 = document.getElementById('salad1')
const salad2 = document.getElementById('salad2')

const main1 = document.getElementById('main-course1')
const main2 = document.getElementById('main-course2')



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

      console.log(data)
      
      salad1.innerHTML = `<strong>${data?.titleSalad[0]}</strong><br>${data?.titleSalad[1]}<br>${data?.titleSalad[2]}`
      
      salad2.innerHTML = `<strong>${data?.titleSalad[3]}</strong><br>${data?.titleSalad[4]}<br>${data?.titleSalad[5]}`

      main1.innerHTML = `<strong>${data?.titleMain[0]}</strong><br>${data?.titleSalad[1]}<br>${data?.titleSalad[2]}`
      
      main2.innerHTML = `<strong>${data?.titleMain[3]}</strong><br>${data?.titleSalad[4]}<br>${data?.titleSalad[5]}`
      
    
    
    
    
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  
  fetchData();

  


