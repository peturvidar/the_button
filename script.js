
  var clicks = 0;

  function onClickIncrease() {
    
    if(clicks < 35){
      clicks += 5;
      document.getElementById('clicks').innerHTML = clicks;
    }else{
      printAlert();
    }
  };
  function onClickDecrease() {
    if(clicks > -35){
      clicks -= 5;
     document.getElementById("clicks").innerHTML = clicks;
    }else{
      printAlert();
    }
    };
    
 function printAlert() {
  document.getElementById('image')
          .style.display = "block";
 }

