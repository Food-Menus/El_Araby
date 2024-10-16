fetch('./../../Data-base/Waraq_lahm.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Waraq_lahm_type_1').textContent = data.Waraq_lahm_type_1;
    document.getElementById('Waraq_lahm_prise_1').textContent = data.Waraq_lahm_prise_1;
    document.getElementById('Waraq_lahm_type_2').textContent = data.Waraq_lahm_type_2;
    document.getElementById('Waraq_lahm_prise_2').textContent = data.Waraq_lahm_prise_2;
    document.getElementById('Waraq_lahm_type_3').textContent = data.Waraq_lahm_type_3;
    document.getElementById('Waraq_lahm_prise_3').textContent = data.Waraq_lahm_prise_3;
    document.getElementById('Waraq_lahm_type_4').textContent = data.Waraq_lahm_type_4;
    document.getElementById('Waraq_lahm_prise_4').textContent = data.Waraq_lahm_prise_4;
    document.getElementById('Waraq_lahm_type_5').textContent = data.Waraq_lahm_type_5;
    document.getElementById('Waraq_lahm_prise_5').textContent = data.Waraq_lahm_prise_5;
    document.getElementById('Waraq_lahm_type_6').textContent = data.Waraq_lahm_type_6;
    document.getElementById('Waraq_lahm_prise_6').textContent = data.Waraq_lahm_prise_6;


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