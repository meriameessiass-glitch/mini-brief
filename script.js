const nam=document.querySelector('#nom')
const tél=document.querySelector('#télé')
const list=document.querySelector('#liste')
const search=document.querySelector('#search')
const span =document.querySelector('span')
const form=document.querySelector('form')
const message=document.querySelector('#error')
console.log(form)
let contacts=[]
function afficher(){
    list.innerHTML=''
    contacts.forEach((element,index) => {
        const li=document.createElement('li')
        const nome=document.createElement('p')
        const nbr=document.createElement('p')
        const sup=document.createElement('button')
        const mod=document.createElement('button')
        mod.textContent='mod'
        sup.textContent='sup'
        nbr.textContent=element.tel
        nome.textContent=element.nom
        li.append(nome,nbr,mod,sup)
        list.append(li)
        sup.addEventListener('click', ()=>{
            li.remove()
            contacts.splice(index,1)
        })
    });
}



form.addEventListener('submit', (e) => { 
    e.preventDefault(); 
    if(nam.value==""){
        message.classList.add("erreur")
    }else{
          message.classList.remove("erreur")
   const contact={
    id:Date.now(),
    nom:nam.value,
    tel:tél.value,
   }
   console.log(contact.id)
   contacts.push(contact)
   form.reset()
   afficher()
}})