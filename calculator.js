
      function button(number){
        
        document.getElementById("greenbox").innerText+=number
        
      }
      function cleandisplay(){
        document.getElementById("greenbox").innerText=""
      }
      
      function calculate(){
        result=eval(document.getElementById("greenbox").innerText)
        document.getElementById("greenbox").innerText=result
      }
