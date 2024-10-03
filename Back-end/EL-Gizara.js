fetch('./../../Data-base/EL-Gizara.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Gizara_type_1').textContent = data.Gizara_type_1;
    document.getElementById('Gizara_prise_1').textContent = data.Gizara_prise_1;
    document.getElementById('Gizara_type_2').textContent = data.Gizara_type_2;
    document.getElementById('Gizara_prise_2').textContent = data.Gizara_prise_2;
    document.getElementById('Gizara_type_3').textContent = data.Gizara_type_3;
    document.getElementById('Gizara_prise_3').textContent = data.Gizara_prise_3;
    document.getElementById('Gizara_type_4').textContent = data.Gizara_type_4;
    document.getElementById('Gizara_prise_4').textContent = data.Gizara_prise_4;
    document.getElementById('Gizara_type_5').textContent = data.Gizara_type_5;
    document.getElementById('Gizara_prise_5').textContent = data.Gizara_prise_5;
    document.getElementById('Gizara_type_6').textContent = data.Gizara_type_6;
    document.getElementById('Gizara_prise_6').textContent = data.Gizara_prise_6;
    document.getElementById('Gizara_type_7').textContent = data.Gizara_type_7;
    document.getElementById('Gizara_prise_7').textContent = data.Gizara_prise_7;
    document.getElementById('Gizara_type_8').textContent = data.Gizara_type_8;
    document.getElementById('Gizara_prise_8').textContent = data.Gizara_prise_8;
    document.getElementById('Gizara_type_9').textContent = data.Gizara_type_9;
    document.getElementById('Gizara_prise_9').textContent = data.Gizara_prise_9;
    document.getElementById('Gizara_type_10').textContent = data.Gizara_type_10;
    document.getElementById('Gizara_prise_10').textContent = data.Gizara_prise_10;
    document.getElementById('Gizara_type_11').textContent = data.Gizara_type_11;
    document.getElementById('Gizara_prise_11').textContent = data.Gizara_prise_11;
    document.getElementById('Gizara_type_12').textContent = data.Gizara_type_12;
    document.getElementById('Gizara_prise_12').textContent = data.Gizara_prise_12;
    document.getElementById('Gizara_type_13').textContent = data.Gizara_type_13;
    document.getElementById('Gizara_prise_13').textContent = data.Gizara_prise_13;
    document.getElementById('Gizara_type_14').textContent = data.Gizara_type_14;
    document.getElementById('Gizara_prise_14').textContent = data.Gizara_prise_14;
    
  });