fetch('./../../Data-base/Wagabat.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Wagabat_type_1').textContent = data.Wagabat_type_1;
    document.getElementById('Wagabat_prise_1').textContent = data.Wagabat_prise_1;
    document.getElementById('Wagabat_type_2').textContent = data.Wagabat_type_2;
    document.getElementById('Wagabat_prise_2').textContent = data.Wagabat_prise_2;
    document.getElementById('Wagabat_type_3').textContent = data.Wagabat_type_3;
    document.getElementById('Wagabat_prise_3').textContent = data.Wagabat_prise_3;
    document.getElementById('Wagabat_type_4').textContent = data.Wagabat_type_4;
    document.getElementById('Wagabat_prise_4').textContent = data.Wagabat_prise_4;


  });