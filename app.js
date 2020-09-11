//Book Class:Represents a Book
class Book{
	constructor(title,author ,status ,pages){
		this.title=title;
		this.author=author;
		this.status=status;
		this.pages=pages;
	}
}

//UI class:Handles the UI
class UI{
	static displayBooks(){
		const storedBook=[
		{
			title:"Legend of Seeker",
			author:"Mwangi Mjega",
			status:"Not Read",
			pages:'456'
		},
		{
			title:" Seeker Of Legend",
			author:"Mwangi ",
			status:"Not Read",
			pages:'456'
		}

		];
		const books=storedBook;
		books.forEach((book)=>UI.addBookToList(book));
	}
	 static addBookToList(book){
	 	const list=document.querySelector('#book-list');
	 	const row=document.createElement('tr')
	 	row.innerHTML=`
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.status}</td>
         <td>${book.pages}</td>
         <td><a href="#" class="btn btn-danger btn-sm-delete">X</a></td>
         `;
      list.appendChild(row);
	 }
	 //Clear textfields
	 static clearFields(){
	 	document.querySelector('#title').value="";
	 	document.querySelector("#author").value="";
	 	document.querySelector('#status').value="";
	 	document.querySelector("#pages").value="";

	 }
}

//Store Class:Handles the storage

//Event:Add a Book
document.querySelector('#book-form').addEventListener('submit' ,(e)=>{
	//Prevent actual default
	e.preventDefault();

	const title=document.querySelector('#title').value;
	const author=document.querySelector('#author').value;
	const status=document.querySelector('#status').value;
	const pages=document.querySelector('#pages').value;

	const book=new Book(title,author,status,pages);
	//console.log(book);
	UI.addBookToList(book);
	UI.clearFields();


});

//Event:Remove a Book

//Event:Display Books
document.addEventListener('DOMContentLoaded',UI.displayBooks);
