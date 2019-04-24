var $elem = $("#cuteCat");
var $score = $("#score");
//console.log(parseInt(score)+1);
$elem.click(function(e){
  var currScore = $score.text();
  $score.text(parseInt(currScore)+1);
  //e.currentTarget.style.opacity = 1;
});

$elem.on("mouseover", function(e){
  e.currentTarget.style.opacity = 0.9;
  e.currentTarget.style.border= "2px solid orangered";
});

$elem.on("mouseout", function(e){
  e.currentTarget.style.opacity = 1;
  e.currentTarget.style.border= "2px solid white";
});


var Cats = function(name, src){
  this.imgSrc = src;
  this.clicked = 0;
  this.name = name;
  
};

Cats.prototype.update = function(){
  this.clicked += 1;
};

var cats = ["//lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426",
           "//lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&amp;h=496"];
var clickableCats = [];
for (cat in cats){
  var kitty = new Cats("Kitty "+cat, cats[cat]);
  clickableCats.push(kitty);
}

console.log(clickableCats);
   
    
    
    
    
    
    
    