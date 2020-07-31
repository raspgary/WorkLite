$(document).ready(function () {


  var firebaseConfig = 
    apiKey: "apiKey",
    authDomain: "worklite-1ab69.firebaseapp.com",
    databaseURL: "https://worklite-1ab69.firebaseio.com",
    storageBucket: "worklite-1ab69.appspot.com",
  };{
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var firm = localStorage.getItem("firm");

  var pic = "";



  $(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    pic = $(this).val();
    console.log(pic);
  });

  function gotData() {
    var firstName = $("#firstInput").val();
    console.log(firstName);

    var lastName = $("#lastInput").val();
    console.log(lastName);

    var phoneNumber = $("#phoneInput").val();
    console.log(phoneNumber);

    var location = $("#test1 option:selected").text();
    console.log(location);

    var injuries = [];
    $.each($("#test2 option:selected"), function(){            
        injuries.push($(this).val());
    });
    console.log(injuries.join(", "));
    var inj = injuries.join(", ");

    var ambulance = $("#test3 option:selected").text();
    console.log(ambulance);

    var er = $("#test4 option:selected").text();
    console.log(er);

    var drunk = $("#test5 option:selected").text();
    console.log(drunk);

    var pain = $("#test6 option:selected").text();
    console.log(pain);

    var emotion = $("#test7 option:selected").text();
    console.log(emotion);

    var passenger = $("#passInput").val();
    console.log(passenger);

    var fault = $("#test8 option:selected").text();
    console.log(fault);

    var type = $("#test9 option:selected").text();
    console.log(type);

    var roll = $("#test10 option:selected").text();
    console.log(roll);

    var caseVal = 0;


    $.ajax({
        url: "/_get_data/",
        type: "POST",
        async: false,
        data: {
          Ambulance: ambulance,
          Drunk: drunk,
          Location: location,
          Pain: pain,
          Emotion: emotion,
          Passengers: passenger,
          Fault: fault,
          Type: type,
          Roll: roll,
        },
        success: function(resp){
            caseVal = resp.data;
            console.log(caseVal);

            var ref = database.ref("Orders/"+firstName);
            ref.set({
              FirstName: firstName,
              LastName: lastName,
              Phone: phoneNumber,
              Location: location,
              Injury: inj,
              Ambulance: ambulance,
              ER: er,
              Drunk: drunk,
              Pain: pain,
              Emotion: emotion,
              Passengers: passenger,
              Fault: fault,
              Type: type,
              Roll: roll,
              Firm: firm,
              Picture: pic,
              CaseVal: caseVal
            });
            localStorage.setItem("caseVal", caseVal);
            nextPage();
        },
        error: function (resp) {
            console.log(resp.data);
        }
    });

    
  }
  function nextPage() {
    
    
    $(location).attr("href", "model.html");

    var delayInMilliseconds = 500; 
    // setTimeout(function() {
    //   $(location).attr("href", "model.html");
    // }, delayInMilliseconds);
  }
  $("#submit").click(function(){
    gotData();
  });


});

