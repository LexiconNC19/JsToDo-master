(() => {

    let listan = document.querySelector('#listan');
    let input = document.querySelector('#additem').addEventListener('change', addItem);

    function addItem() {

        //Create new li with class and eventlistener
        let li = document.createElement('li');
        li.innerHTML = this.value;
        this.value = "";
        li.classList.add('list-group-item');
        li.addEventListener('click', change);

        //Create button with classes and eventlistener
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'btn-sm');
        button.innerText = 'Ta bort';
        button.addEventListener('click', removeItem);

        //Add button to li element
        li.appendChild(button);

        //Add li to unorderlist 
        listan.append(li);

    }

    //This is the caller of the function
    function removeItem() {
        this.parentElement.remove();
    }

    function change() {
       this.classList.toggle('change');
    }

})();
