const nam=document.querySelector('#nom')
const tél=document.querySelector('#télé')
const list=document.querySelector('#liste')
const search=document.querySelector('#search')
const span =document.querySelector('span')
const form=document.querySelector('form')
const message=document.querySelector('#error')
const enreg=document.querySelector('#modul')
const conteur=document.querySelector('#conteur')
console.log(form)
let contacts=[]
let enEdition=null
function afficher(elementafficher=contacts){
    list.innerHTML=''
    elementafficher.forEach((element,index) => {
        const li=document.createElement('li')
        const nome=document.createElement('p')
        const nbr=document.createElement('p')
        const sup=document.createElement('button')
        const mod=document.createElement('button')
        mod.textContent='mod'
        sup.textContent='sup'
        sup.style.backgroundColor=
        nbr.textContent=element.tel
        nome.textContent=element.nom
        li.append(nome,nbr,mod,sup)
        list.append(li)
        sup.addEventListener('click', ()=>{
            li.remove()
            elementafficher.splice(index,1)
            conteur.textContent=elementafficher.length
        })
        mod.addEventListener('click',()=>{
                nam.value=element.nom
                tél.value=element.tel
                enEdition=element.id
            
        })
    });
}



form.addEventListener('submit', (e) => { 
    e.preventDefault(); 
    if(nam.value==""){
        message.classList.add("erreur")
    }else{
        message.classList.remove("erreur")
        if(enEdition!==null){
            const contmod=contacts.find(e=>e.id===enEdition)
            contmod.nom=nam.value
            contmod.tel=tél.value
            form.reset()
            afficher()

        }else{
         const contact={
        id:Date.now(),
          nom:nam.value,
          tel:tél.value,
       }

   console.log(contact.id)
   contacts.push(contact)
   form.reset()
   afficher()
   conteur.textContent=contacts.length
}}})
search.addEventListener('input',()=>{
    const element=contacts.filter(e=>e.nom.trim().toLowerCase().includes(search.value.trim().toLowerCase()))
    afficher(element)
})
