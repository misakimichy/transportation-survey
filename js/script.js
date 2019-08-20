$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#vacation-responses").show();
    $("input:checkbox[name=vacation-transportation]:checked").each(function(){
      var vacationTransportationMode = $(this).val();
      $('#vacation-responses').append(vacationTransportationMode + "<br>");
    });
  });
});
