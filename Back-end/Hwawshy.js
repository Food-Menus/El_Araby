fetch('./../../Data-base/Hwawshy.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Hwawshy_type_1').textContent = data.Hwawshy_type_1;
    document.getElementById('Hwawshy_prise_1').textContent = data.Hwawshy_prise_1;
    document.getElementById('Hwawshy_type_2').textContent = data.Hwawshy_type_2;
    document.getElementById('Hwawshy_prise_2').textContent = data.Hwawshy_prise_2;
    document.getElementById('Hwawshy_type_3').textContent = data.Hwawshy_type_3;
    document.getElementById('Hwawshy_prise_3').textContent = data.Hwawshy_prise_3;
    document.getElementById('Hwawshy_type_4').textContent = data.Hwawshy_type_4;
    document.getElementById('Hwawshy_prise_4').textContent = data.Hwawshy_prise_4;



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