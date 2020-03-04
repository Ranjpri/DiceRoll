function checkRefresh(){

        var value1 = Math.random();
        value1 = Math.ceil(value1*6);
        var value2 = Math.random();
        value2 = Math.ceil(value2*6);
        
        // document.getElementsByClassName("value1")[0].innerHTML = value1;
        // document.getElementsByClassName("value2")[0].innerHTML = value2;
    
        //Resetting the images
        document.querySelector("img.image1").setAttribute("src","images/dice"+value1+".png");
        document.querySelector("img.image2").setAttribute("src","images/dice"+value2+".png");
    
        //Resetting the heading
        if(value1 > value2){
             document.querySelector("h1").textContent = "🚩Player 1 wins"
        }
        else if(value1 < value2)
        {
            document.querySelector("h1").textContent = "Player 2 wins🚩"
        }
        else if((value1 = value2) && (value1!='')){
    
            document.querySelector("h1").textContent = "DRAW!!!!"
        }
    
}