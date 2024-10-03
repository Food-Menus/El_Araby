fetch('./../../Data-base/Waraq_lahm.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Waraq_lahm_type_1').textContent = data.Waraq_lahm_type_1;
    document.getElementById('Waraq_lahm_prise_1').textContent = data.Waraq_lahm_prise_1;
    document.getElementById('Waraq_lahm_type_2').textContent = data.Waraq_lahm_type_2;
    document.getElementById('Waraq_lahm_prise_2').textContent = data.Waraq_lahm_prise_2;

  });