// const inputSection = document.getElementById('inputSection');
// const inputText = document.getElementById('input-text');
// const inputTask = document.getElementById('add-task');
// const outputSection = document.getElementById('outputSection');

// inputTask.addEventListener('click', function () {
//     let task = document.createElement('div');
//     task.classList.add('task');

//     let li = document.createElement('li');
//     li.innerHTML = `${inputText.value}`
//     task.appendChild(li)

//     let checkbutton = document.createElement('button');
//     checkbutton.innerHTML='<i class="fa-solid fa-check"></i>';
//     checkbutton.classList.add('checkButton');
//     task.appendChild(checkbutton);

//     let deletebutton = document.createElement('button');
//     deletebutton.innerHTML='<i class="fa-solid fa-trash"></i>';
//     deletebutton.classList.add('deleteButton');
//     task.appendChild(deletebutton);

//     if (inputText.value === "") {
//         alert("Enter the text");
//     }
//     else {
//         outputSection.appendChild(task)
//     }
//     inputTask.value = "";

//     checkbutton.addEventListener('click' , function () {
//         checkbutton.parentElement.style.textDecoration = "line-through"
//     })

//     deletebutton.addEventListener('click' , function (e) {
//         let target = e.target;
//         target.parentElement.remove()
//     })
// })

const inputSection = document.getElementById('inputSection');
const inputText = document.getElementById('input-text');
const inputTask = document.getElementById('add-task');
const outputSection = document.getElementById('outputSection');
const deleteTask = document.getElementById('delete-task');

inputTask.addEventListener('click', function () {

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputText.value}`;
    task.appendChild(li);

    let checkbutton = document.createElement('button');
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add('checkButton');
    task.appendChild(checkbutton)

    let deletebutton = document.createElement('button');
    deletebutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deletebutton.classList.add('deleteButton');
    task.appendChild(deletebutton)

    if (inputText === "") {
        alert('Enter the value');
    }
    else {
        outputSection.appendChild(task);
    }

    inputText.value = "";

    checkbutton.addEventListener('click', function () {
        checkbutton.parentElement.style.textDecoration = "line-through"
    })

    deletebutton.addEventListener('click', function (e) {
        let target = e.target;
        target.parentElement.remove();
    })
    if (task.textContent.trim() !== '') {
        deleteTask.addEventListener('click', function () {
            task.parentElement.remove();
        })
    }
    
})