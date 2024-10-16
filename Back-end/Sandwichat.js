fetch('./../../Data-base/Sandwichat.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Sandwichat_type_1').textContent = data.Sandwichat_type_1;
    document.getElementById('Sandwichat_prise_1').textContent = data.Sandwichat_prise_1;
    document.getElementById('Sandwichat_type_2').textContent = data.Sandwichat_type_2;
    document.getElementById('Sandwichat_prise_2').textContent = data.Sandwichat_prise_2;
    document.getElementById('Sandwichat_type_3').textContent = data.Sandwichat_type_3;
    document.getElementById('Sandwichat_prise_3').textContent = data.Sandwichat_prise_3;
    document.getElementById('Sandwichat_type_4').textContent = data.Sandwichat_type_4;
    document.getElementById('Sandwichat_prise_4').textContent = data.Sandwichat_prise_4;
    document.getElementById('Sandwichat_type_5').textContent = data.Sandwichat_type_5;
    document.getElementById('Sandwichat_prise_5').textContent = data.Sandwichat_prise_5;
    document.getElementById('Sandwichat_type_6').textContent = data.Sandwichat_type_6;
    document.getElementById('Sandwichat_prise_6').textContent = data.Sandwichat_prise_6;
    document.getElementById('Sandwichat_type_7').textContent = data.Sandwichat_type_7;
    document.getElementById('Sandwichat_prise_7').textContent = data.Sandwichat_prise_7;
    document.getElementById('Sandwichat_type_8').textContent = data.Sandwichat_type_8;
    document.getElementById('Sandwichat_prise_8').textContent = data.Sandwichat_prise_8;
    document.getElementById('Sandwichat_type_9').textContent = data.Sandwichat_type_9;
    document.getElementById('Sandwichat_prise_9').textContent = data.Sandwichat_prise_9;




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