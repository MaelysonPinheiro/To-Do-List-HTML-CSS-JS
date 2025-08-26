let tarefa = document.getElementById('add-tarefa')
let lista = document.getElementById('lista')
const tarSalvas = localStorage.getItem('atividades')
let arraylist = tarSalvas ? JSON.parse(tarSalvas) : [];

function exibirItems(){
    lista.innerHTML = ''
    arraylist.forEach(item=>{
        const concluir = document.createElement('button')
        concluir.id = 'btt-concluir'
        concluir.textContent = 'X'
        
        concluir.addEventListener('click', ()=>{
            concluir.classList.toggle('ativo')
        })

        const li = document.createElement('li') 
        li.textContent = item  
        li.id = 'lis'     

        const apagar = document.createElement('button') 
        apagar.id = 'btt-apagar'
        apagar.textContent = 'Apagar'
        apagar.addEventListener('click', () => {
            arraylist = arraylist.filter(t => t !== item); 
            localStorage.setItem('atividades', JSON.stringify(arraylist));
            exibirItems();
        })

        li.appendChild(concluir)
        li.appendChild(apagar)   
        lista.appendChild(li)   
    })
}
exibirItems()

function addtar(){
    let vtarefa = tarefa.value
    if(vtarefa){
        arraylist.push(vtarefa)
        localStorage.setItem('atividades', JSON.stringify(arraylist));
        tarefa.value = ''
        exibirItems()
        console.log('Funcionouuu')
    }
}











