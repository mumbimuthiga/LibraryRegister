function Books(title ,author ,pages ,status){
	this.title=title
	this.author=author
	this.pages=pages
	this.status=status
	this.info=function (){
		return(title + "" +"by"+ author +","+pages +"," +status);
	}
}
const Book1=new Books("Behind Me" ,"Jonh Legend" ,456 ,"not read");
 console.log(Book1.info());



function Student(){

 }
 function Student(name, grade) {
  this.name = name
  this.grade = grade
}
function sayName(){
	this.name=name;
}
 Student.prototype.sayName = function(name) {
 	// body...
 	console.log(this.name);
 }
 function EigthGrader(name) {
 	// body...
 	this.name=name;
 	this.grade=8;
 }
 function NinthGrader(name){
 	this.name=name;
 	this.grade=9;
 }

 NinthGrader.prototype.sayName=function(){console.log("HAHAA")};




const carl = new EigthGrader("carl");
//console.log(carl.sayName() );//uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!
 console.log(carl.grade);

