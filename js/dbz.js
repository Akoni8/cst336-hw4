var saiyan = ["Goku","Vegeta","Gohan","Goten","Trunks","Napa","Raditz","Bardock", "Broly","King_Vegeta"];
var namekian = ["Piccolo", "Dende","Kami","Nail","Guru"];
var frieza = ["Frieza","Cooler","King_Cold","Zarbon","Dodoria"];
var human = ["Hercule","Videl","Yamcha", "Krillin", "Roshi","Bulma","ChiChi"];



function fighter(){
    
    
    
    if($("#class").val() == "namekian"){
        var num = Math.floor( Math.random() * namekian.length );
        var img = namekian[ num ];
        var imgStr = '<img src="images/' + img + '.jpg" alt = "">';
        document.write(imgStr); document.close();
        $("#imageBox").html(imgStr);
    }
}

// $("#submit").click(fighter());
$("#submit").click(function(){
      $("#imageBox").html("<img src='images/Bardock.jpg'>");
});