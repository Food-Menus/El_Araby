fetch('./../../Data-base/Sawany.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Sawany_type_1').textContent = data.Sawany_type_1;
    document.getElementById('Sawany_type_2').textContent = data.Sawany_type_2;
    
  });