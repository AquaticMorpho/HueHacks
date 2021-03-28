function changeBGColor(e){
    var div = document.getElementById("backGroundColor");
    var x = (e.offsetX / div.clientWidth); 
    var y = (e.offsetY / div.clientHeight);  
    const Left = 0; const Right = 1; const Middle = 0.5;
    const Top = 0; const Bottom = 1;
    
    var rVal = (Math.sqrt((Math.pow((x - Left), 2) + Math.pow((Top - y), 2)))); 
    var bVal = (Math.sqrt((Math.pow((Right - x), 2) + Math.pow((Top - y), 2)))); 
    var gVal = (Math.sqrt((Math.pow((x - Middle), 2) + Math.pow((y - Bottom), 2)))); 
    rVal = Math.floor(rVal * 255 * 1.2); if(rVal > 255){ rVal = 255; } if(rVal < 0){ rVal = 0; } 
    bVal = Math.floor(bVal * 255 * 1.2); if(bVal > 255){ bVal = 255; } if(bVal < 0){ bVal = 0; }
    gVal = Math.floor(gVal * 255 * 1.2); if(gVal > 255){ gVal = 255; } if(gVal < 0){ gVal = 0; }

    div.style.backgroundColor = `rgb(${rVal}, ${bVal}, ${gVal})`;
}