var saiyan = ["Goku","Vegeta","Gohan","Goten","Trunks","Napa","Raditz","Bardock", "Broly","King_Vegeta"];
var namekian = ["Piccolo", "Dende","Kami","Nail","Guru"];
var frieza = ["Frieza","Cooler","King_Cold","Zarbon","Dodoria"];
var human = ["Hercule","Videl","Yamcha", "Krillin", "Roshi","Bulma","ChiChi"];

console.log(saiyan);
console.log(namekian);
console.log(frieza);
console.log(human);


$('form').submit(function() {
    fighter();
});

$('#reset').click(function() {
  $("#imageBox").empty();
});

function fighter(){
  var name = $("input[name='name']").val();
  console.log(name);
  var likeFight = $("input[name='fight']:checked").val();
  console.log("Likes to fight?" + likeFight);
  var fighter = $("#class").val();
  console.log(fighter);
  
  if(name == "" || likeFight == "" || fighter == ""){
    alert("Please fill out all form elements.")
  }
  
  else if(likeFight == "no"){
        $("#imageBox").append("<div>"+name+" you got Yamcha because you don't like to fight</div>");
        $("#imageBox").append('<img src="images/Yamcha.jpg" alt = "Yamcha">');
   
  }
   else if(fighter == "namekian"){
        var num = Math.floor( Math.random() * namekian.length );
        var img = namekian[ num ];
        var imgStr = '<img src="images/' + img + '.jpg" alt = "">';
        $("#imageBox").append("<div>"+name+" you got "+img+"</div>");
        $("#imageBox").append(imgStr);
    }
    else if(fighter == "saiyan") {
      var num = Math.floor( Math.random() * saiyan.length );
        var img = saiyan[ num ];
        var imgStr = '<img src="images/' + img + '.jpg" alt = "">';
        $("#imageBox").append("<div>"+name+" you got "+img+"</div>");
        $("#imageBox").append(imgStr);
    }
    else if(fighter == "frieza"){
      var num = Math.floor( Math.random() * frieza.length );
        var img = frieza[ num ];
        var imgStr = '<img src="images/' + img + '.jpg" alt = "">';
        $("#imageBox").append("<div>"+name+" you got "+img+"</div>");
        $("#imageBox").append(imgStr);
    }
    else if(fighter == "human") {
      var num = Math.floor( Math.random() * human.length );
        var img = human[ num ];
        var imgStr = '<img src="images/' + img + '.jpg" alt = "">';
        $("#imageBox").append("<div>"+name+" you got "+img+"</div>");
        $("#imageBox").append(imgStr);
    }
}