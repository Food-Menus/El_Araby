fetch('./../../Data-base/Salata.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Salata_type_1').textContent = data.Salata_type_1;
    document.getElementById('Salata_prise_1').textContent = data.Salata_prise_1;
    document.getElementById('Salata_type_2').textContent = data.Salata_type_2;
    document.getElementById('Salata_prise_2').textContent = data.Salata_prise_2;
    document.getElementById('Salata_type_3').textContent = data.Salata_type_3;
    document.getElementById('Salata_prise_3').textContent = data.Salata_prise_3;
    document.getElementById('Salata_type_4').textContent = data.Salata_type_4;
    document.getElementById('Salata_prise_4').textContent = data.Salata_prise_4;



    document.getElementById('Add_type_1').textContent = data.Add_type_1;
    document.getElementById('Add_prise_1').textContent = data.Add_prise_1;
    document.getElementById('Add_type_2').textContent = data.Add_type_2;
    document.getElementById('Add_prise_2').textContent = data.Add_prise_2;
    document.getElementById('Add_type_3').textContent = data.Add_type_3;
    document.getElementById('Add_prise_3').textContent = data.Add_prise_3;
    document.getElementById('Add_type_4').textContent = data.Add_type_4;
    document.getElementById('Add_prise_4').textContent = data.Add_prise_4;
    document.getElementById('Add_type_5').textContent = data.Add_type_5;
    document.getElementById('Add_prise_5').textContent = data.Add_prise_5;

    
  });