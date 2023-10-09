


function field (id, increase) {
    const field = document.getElementById(id);
        const text = field.innerText;
        const number = parseFloat(text);
        increase = number + 1;
        field.innerText = increase;
        
      
      
        if(increase === 60){
            minuteCount();
            
            field.innerText = 0;
           
        }
        else if (id === 'hour' && increase === 24) {
            field.innerText = 0;
        }
        
        return increase;
}

// minutes count update
function minuteCount (){
    
       const result = field('minute');
       if(result === 60){
        hourCount();
       }
    
       
}

//  hours count update
function hourCount () {
    const result = field('hour');
    if(result === 24){
        dayCount ();
    }
    
}

// days count update
function dayCount () {
    field('day');
}

// setInterval inner function
const handleCounter = (seconds) =>{
    const counterField = document.getElementById('mili_seconds');
      const counterFieldText = counterField.innerText;
      let counter = parseFloat(counterFieldText);
      ++counter;
      counterField.innerText = counter;
  

      if(counter === 243){
        counterField.innerText = 0;
        field('second', seconds) 
        
      }
      
    
  
    
      
}

// global interval id that is used to many other functions for set interval and clear interval

let myInterval;

// clear interval for stop counting time
const handleStop = () => {
    clearInterval(myInterval);
};
// setInterval for start counting time
const handleStart = () => {
    myInterval = setInterval(handleCounter, 1);
};

// Data Reset universal function
function resetData(id){
    const field = document.getElementById(id);
    field.innerText = 0;
}
const handleReset = () => {
    resetData('mili_seconds');
    resetData('second');
    resetData('minute');
    resetData('hour');
    resetData('day');

};

