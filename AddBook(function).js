const form=document.querySelector('#book-form');
const title=document.querySelector('#title');
const author=document.querySelector('#author');
const status=document.querySelector('#status');
const pages=document.querySelector('#pages');
	

form.addEventListener('submit' ,onSubmit);
function onSubmit(e) {
	e.preventDefault();
	
	//Please Enter the Fields
	if(title.value===''|| author.value===''|| status.value===''||pages.value===''){

	const div=document.createElement('div');
	div.classList.add('danger');
	//div.style={background:red};
	const container=document.querySelector('.container');
	div.innerHTML="Please Fill in the Fields";
	container.insertBefore(div ,form);
	setTimeout(()=>div.remove(),3000);
	//form.appendChild(div);


	}
	else{
		const row=document.createElement('tr');
		const booklist=document.querySelector('#book-list');
		/*row.appendChild(document.createTextNode
			(`${title.value}`))*/
			row.innerHTML=
			`<td>${title.value}</td>
			<td>${author.value}</td>
			<td>${status.value}</td>
			<td>${pages.value}</td>`
	booklist.appendChild(row);


	}

	
}

	



