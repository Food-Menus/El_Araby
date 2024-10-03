fetch('./../../Data-base/Tagen.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Tagen_type_1').textContent = data.Tagen_type_1;
    document.getElementById('Tagen_prise_1').textContent = data.Tagen_prise_1;
    document.getElementById('Tagen_type_2').textContent = data.Tagen_type_2;
    document.getElementById('Tagen_prise_2').textContent = data.Tagen_prise_2;
    document.getElementById('Tagen_type_3').textContent = data.Tagen_type_3;
    document.getElementById('Tagen_prise_3').textContent = data.Tagen_prise_3;
    document.getElementById('Tagen_type_4').textContent = data.Tagen_type_4;
    document.getElementById('Tagen_prise_4').textContent = data.Tagen_prise_4;
    document.getElementById('Tagen_type_5').textContent = data.Tagen_type_5;
    document.getElementById('Tagen_prise_5').textContent = data.Tagen_prise_5;
    document.getElementById('Tagen_type_6').textContent = data.Tagen_type_6;
    document.getElementById('Tagen_prise_6').textContent = data.Tagen_prise_6;
    document.getElementById('Tagen_type_7').textContent = data.Tagen_type_7;
    document.getElementById('Tagen_prise_7').textContent = data.Tagen_prise_7;
    document.getElementById('Tagen_type_8').textContent = data.Tagen_type_8;
    document.getElementById('Tagen_prise_8').textContent = data.Tagen_prise_8;
    document.getElementById('Tagen_type_9').textContent = data.Tagen_type_9;
    document.getElementById('Tagen_prise_9').textContent = data.Tagen_prise_9;

  });