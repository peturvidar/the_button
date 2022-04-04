
  var clicks = 0;
  var limit = 35;
  var stepSize = 5;
  function onClickIncrease() {
    
    if(clicks < limit){
      clicks += stepSize;
      document.getElementById('clicks').innerHTML = clicks;
    }else{
      printAlert();
    }
  };
  function onClickDecrease() {
    if(clicks > -limit){
      clicks -= stepSize;
     document.getElementById("clicks").innerHTML = clicks;
    }else{
      printAlert();
    }
    };
    
 function printAlert() {
  document.getElementById('image')
          .style.display = "block";
 };

  function onClickSave() {
    const input = document.getElementById('input1').value;  
    localStorage.setItem('min/max', input);
    limit = input;
  };

  function onClickStepSize() {
    const input = document.getElementById('input2').value;
    stepSize = parseInt(input);
    localStorage.setItem('step size', input);
  };


