function btnsend(){

    var entname = document.getElementById("name").value;
    var entemail = document.getElementById("email").value;
    var entsubject= document.getElementById("subject").value;
    var entmessage= document.getElementById("message").value;



    var url = "https://wa.me/+9779816232444?text="+"----Hello there!👋 ----"+"%0a"+"I'm :"+entname+"%0a"+"My email address :"+entemail+"%0a"+
    "I want to"+entsubject+"%0a"+"----Additional Information ----"+"%0a"+"Message : "+"%0a"+entmessage;
  window.open(url);
  
}