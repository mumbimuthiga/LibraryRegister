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
		const storedBook=Store.getBooks();
	
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
         <td><a href="#" class="btn btn-danger btn-sm
         delete">X</a></td>
         `;
      list.appendChild(row);
	 }
	static showAlert(message,className){
		const div=document.createElement('div');
		div.className=`alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container=document.querySelector('.container');
		const form=document.querySelector('#book-form');
		container.insertBefore(div ,form);
		//Vanish in 3 Seconds
		setTimeout(()=>document.querySelector('.alert').remove(),3000);

	}


static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
	 //Clear textfields
	 static clearFields(){
	 	document.querySelector('#title').value="";
	 	document.querySelector("#author").value="";
	 	document.querySelector('#status').value="";
	 	document.querySelector("#pages").value="";

	 }
}


//Handles the Store
class Store{
	static getBooks(){
		let books;
		if(localStorage.books==='null'){
			books=[];
		}else{
			books=JSON.parse(localStorage.getItem('books'));
		}
		return books;

	}
	static addBook(book){
		const books=Store.getBooks();
		books.push(Book);
		localStorage.getItem('books' ,JSON.stringify(books));


	}
	static removeBook(title){
		const books=Store.getBooks();
		books.forEach((book ,index)=>{
			if(book.title===title){
				books.splice(index ,1);

			}
		});
		localStorage.setItem('books' ,JSON.stringify(books));


	}
}
//Store Class:Handles the storage
//Event:Display Books
document.addEventListener('DOMContentLoaded',UI.displayBooks);

//Event:Add a Book
document.querySelector('#book-form').addEventListener('submit' ,(e)=>{
	//Prevent actual default
	e.preventDefault();

	const title=document.querySelector('#title').value;
	const author=document.querySelector('#author').value;
	const status=document.querySelector('#status').value;
	const pages=document.querySelector('#pages').value;



if(title===''|| author===''|| status===''||pages===''){
		UI.showAlert("Please Fill in the fields" ,'danger');
	}else{
	//Instantiate Book
	const book=new Book(title,author,status,pages);
	//console.log(book);

	//Add Book to UI
	UI.addBookToList(book);

	//Add Book to Store
	Store.addBook(book);

	//Show Success Message
	UI.showAlert("Book Added" ,"success");

	//Clear Fields
	UI.clearFields();
}


});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);
  //Remove Book from Store
  Store.removeBook()
  //Show Delete Message
  UI.showAlert("Booked Removed" ,"success");
  });


