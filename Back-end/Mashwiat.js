fetch('./../../Data-base/Mashwiat.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Mashwiat_type_1').textContent = data.Mashwiat_type_1;
    document.getElementById('Mashwiat_prise_1').textContent = data.Mashwiat_prise_1;
    document.getElementById('Mashwiat_type_2').textContent = data.Mashwiat_type_2;
    document.getElementById('Mashwiat_prise_2').textContent = data.Mashwiat_prise_2;
    document.getElementById('Mashwiat_type_3').textContent = data.Mashwiat_type_3;
    document.getElementById('Mashwiat_prise_3').textContent = data.Mashwiat_prise_3;
    document.getElementById('Mashwiat_type_4').textContent = data.Mashwiat_type_4;
    document.getElementById('Mashwiat_prise_4').textContent = data.Mashwiat_prise_4;
    document.getElementById('Mashwiat_type_5').textContent = data.Mashwiat_type_5;
    document.getElementById('Mashwiat_prise_5').textContent = data.Mashwiat_prise_5;
    document.getElementById('Mashwiat_type_6').textContent = data.Mashwiat_type_6;
    document.getElementById('Mashwiat_prise_6').textContent = data.Mashwiat_prise_6;
    document.getElementById('Mashwiat_type_7').textContent = data.Mashwiat_type_7;
    document.getElementById('Mashwiat_prise_7').textContent = data.Mashwiat_prise_7;
    document.getElementById('Mashwiat_type_8').textContent = data.Mashwiat_type_8;
    document.getElementById('Mashwiat_prise_8').textContent = data.Mashwiat_prise_8;
    document.getElementById('Mashwiat_type_9').textContent = data.Mashwiat_type_9;
    document.getElementById('Mashwiat_prise_9').textContent = data.Mashwiat_prise_9;
    document.getElementById('Mashwiat_type_10').textContent = data.Mashwiat_type_10;
    document.getElementById('Mashwiat_prise_10').textContent = data.Mashwiat_prise_10;
    document.getElementById('Mashwiat_type_11').textContent = data.Mashwiat_type_11;
    document.getElementById('Mashwiat_prise_11').textContent = data.Mashwiat_prise_11;
    document.getElementById('Mashwiat_type_12').textContent = data.Mashwiat_type_12;
    document.getElementById('Mashwiat_prise_12').textContent = data.Mashwiat_prise_12;
    document.getElementById('Mashwiat_type_13').textContent = data.Mashwiat_type_13;
    document.getElementById('Mashwiat_prise_13').textContent = data.Mashwiat_prise_13;
    document.getElementById('Mashwiat_type_14').textContent = data.Mashwiat_type_14;
    document.getElementById('Mashwiat_prise_14').textContent = data.Mashwiat_prise_14;
    
  });