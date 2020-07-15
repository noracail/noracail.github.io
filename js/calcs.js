$(document).ready(function(){
  $("#bmiimg").hide();                
 $('#macro-calculator').hide();                
$('#calorie-calculator').submit(function(e){
  e.preventDefault();
  calcDailyCals();
});

$('#macro-calculator').submit(function(e){
  e.preventDefault();
  calcCalsFromMacros();
});

$('button[type="reset"]').click(function(){
  $('#results').fadeOut('fast',function(){
    $(this).html('');
  });
});
$('#gain_loss_amount').change(function(){
    
    
  calcDailyCals();
});
$('#inches').blur(function(){
        let sex = $('input[name="sex"]:checked').val();
   
        let w = parseFloat($('#weight').val());
        let h = parseFloat($("#inches").val()) /100;
        
        let bmi=(w/h**2);
    

         if (sex==="male"){
             if (bmi >=25){
            $('#bmiimg').attr("src","image/man1.png");      
             } else {
                 $('#bmiimg').attr("src","image/man2.png");
             }
         } 
    if (sex==="female"){
             if (bmi >=25){
            $('#bmiimg').attr("src","image/red1.png");      
             } else {
                 $('#bmiimg').attr("src","image/red2.png");
             }
         } 
    $("#bmiimg").show();
    });
  
    
    
    
});
function calcCalsFromMacros(){
  let carbs = parseInt($('#carbs').val()) * .05;
  let protein = parseInt($('#protein').val()) * .15;
  let fat = parseInt($('#fat').val()) * .80;

  let result = carbs+protein+fat;
  
 
}


function calcDailyCals(){
  
  let age = parseInt($('#age').val());
  let sex = $('input[name="sex"]:checked').val();
  let weight = parseFloat($('#weight').val());
  let height = parseFloat($("#inches").val());
  let activity = parseFloat($('#activity_level').val());
  let goal = parseInt($('#gain_loss_amount').val());
      
  let result;
    
    
  
	if (sex === 'male') {
    result = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * activity;
  } else {
    result = (447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age)) * activity;
  }
  
	result = Math.round(result + goal);
  
  calcDailyMacros(result);
  $('#macro-calculator').show(); 
  //$('#results').fadeOut('fast',function(){
    $('#results').html('<h3>Excelente Consumo de Calorias por dia: ' + result + '</h3>').fadeIn('fast');
  //});    
  
  function calcDailyMacros(result){
    let carbs = (result * .05) /4; 
    let protein = (result * .15) /4; 
    let fat = (result * .80) / 9;
    
    $('#carbs').val(Math.round(carbs));
    $('#protein').val(Math.round(protein));
    $('#fat').val(Math.round(fat));
  }
  
  
}

