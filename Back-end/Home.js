fetch('./../../Data-base/Home.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('Home_type_1').textContent = data.Home_type_1;
    document.getElementById('Home_prise_1').textContent = data.Home_prise_1;
    document.getElementById('Home_type_2').textContent = data.Home_type_2;
    document.getElementById('Home_prise_2').textContent = data.Home_prise_2;
    document.getElementById('Home_type_3').textContent = data.Home_type_3;
    document.getElementById('Home_prise_3').textContent = data.Home_prise_3;
    document.getElementById('Home_type_4').textContent = data.Home_type_4;
    document.getElementById('Home_prise_4').textContent = data.Home_prise_4;
    document.getElementById('Home_type_5').textContent = data.Home_type_5;
    document.getElementById('Home_prise_5').textContent = data.Home_prise_5;

  });