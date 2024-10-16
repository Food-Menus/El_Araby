fetch('./../../Data-base/Sandwichat1.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Sandwichat1_type_1').textContent = data.Sandwichat1_type_1;
    document.getElementById('Sandwichat1_prise_1').textContent = data.Sandwichat1_prise_1;
    document.getElementById('Sandwichat1_type_2').textContent = data.Sandwichat1_type_2;
    document.getElementById('Sandwichat1_prise_2').textContent = data.Sandwichat1_prise_2;
    document.getElementById('Sandwichat1_type_3').textContent = data.Sandwichat1_type_3;
    document.getElementById('Sandwichat1_prise_3').textContent = data.Sandwichat1_prise_3;
    document.getElementById('Sandwichat1_type_4').textContent = data.Sandwichat1_type_4;
    document.getElementById('Sandwichat1_prise_4').textContent = data.Sandwichat1_prise_4;
    document.getElementById('Sandwichat1_type_5').textContent = data.Sandwichat1_type_5;
    document.getElementById('Sandwichat1_prise_5').textContent = data.Sandwichat1_prise_5;
  
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