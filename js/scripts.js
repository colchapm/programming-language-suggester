$(document).ready(function(){
  $("form#survey").submit(function(event) {
    const questionOne = $("input:radio[name=questionOne]:checked").val();
    const questionTwo = $("input:radio[name=questionTwo]:checked").val();
    const questionThree = $("input:radio[name=questionThree]:checked").val();
    const questionFour = $("input:radio[name=questionFour]:checked").val();
    const questionFive = $("input:radio[name=questionFive]:checked").val();
    

    if (questionOne === "webDevelopment" && questionTwo === "money" && questionFive === "google" || questionFive === "github") {
      resultOne = "JavaScript"
      resultTwo = "Java"
      resultThree = "HTML";
    } else if (questionOne === "backEndDevelopment" && questionTwo === "careerChange" || questionTwo === "money" || questionTwo === "notSpecific" && questionFive === "dropbox" || questionFive === "netflix") {
      resultOne = "Python"
      resultTwo = "JavaScript" 
      resultThree ="Ruby";
    } else {
      resultOne = "JavaScript"
      resultTwo = "HTML"
      resultThree = "CSS"
    }
   
    document.getElementById ("resultOne").innerHTML = resultOne;
    document.getElementById ("resultTwo").innerHTML = resultTwo;
    document.getElementById ("resultThree").innerHTML = resultThree;
    $("#suggestion").show();



    event.preventDefault();
  });
});


