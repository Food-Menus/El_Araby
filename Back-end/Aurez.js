fetch('./../../Data-base/Aurez.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Aurez_type_1').textContent = data.Aurez_type_1;
    document.getElementById('Aurez_prise_1').textContent = data.Aurez_prise_1;
    document.getElementById('Aurez_type_2').textContent = data.Aurez_type_2;
    document.getElementById('Aurez_prise_2').textContent = data.Aurez_prise_2;
    document.getElementById('Aurez_type_3').textContent = data.Aurez_type_3;
    document.getElementById('Aurez_prise_3').textContent = data.Aurez_prise_3;

  });