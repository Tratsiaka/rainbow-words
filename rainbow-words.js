



     function rainbow(){
        var textArray, colorArray, texts;
         colorArray = ['#F07C6F','#303E72','#FFDA2E','#22A69D','#6D46DF','#54A0EF','#EE8208'];
        texts = document.querySelectorAll('.rainbow');
         textArray = [];
         for (var i = 0; i<texts.length; i++){
             output = '';
            
             var words = texts[i].innerText.split(' ');
                
             for (var n = 0; n<words.length; n++){
                 color = Math.round(Math.random()*(colorArray.length - 1));
                output += '<span style="color:' + colorArray[color] + '"' + ">"+ words[n] + " " + '</span>';
                
             }
             texts[i].innerHTML = output;
         }
    }

	
	
	