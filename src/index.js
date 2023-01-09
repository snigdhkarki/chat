import {initializeApp} from 'firebase/app'
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    query,
    where,
    orderBy,
    serverTimestamp,
    getDoc,
    updateDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-zFnELyZl5KukDHeEbG3Ka1jkcoKX_hw",
    authDomain: "chat-app-b15d6.firebaseapp.com",
    projectId: "chat-app-b15d6",
    storageBucket: "chat-app-b15d6.appspot.com",
    messagingSenderId: "543818976188",
    appId: "1:543818976188:web:7c01899eb4ed51b58d39b9"
  };

initializeApp(firebaseConfig);


let name = prompt('Enter the data you want:');
const db = getFirestore();

const colRef = collection(db, 'chats');
getDocs(colRef).then((snapshot)=> {
    let chats = [];
    snapshot.docs.forEach((doc)=> {
        chats.push({
            ...doc.data(),id:doc.id,
        })
        
    })
})

const q = query(colRef,orderBy('createdAt'))

const addChatForm = document.querySelector('.add');
addChatForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    addDoc(colRef,{
        chat:addChatForm.chat.value,
        name:name,        
        createdAt:serverTimestamp(),

    }).then(()=>{
        addChatForm.reset();
        document.querySelector('.div').innerHTML = "";
        for(let i =0; i<chats.length;i++)
        {
            
            let br = document.createElement('br');
            let dummy = document.createTextNode(chats[i].chat);
            let dummy1 = document.createTextNode(' (' + chats[i].name + ')');
            let div = document.querySelector('.div');
            div.appendChild(br);
            div.appendChild(dummy);
            div.appendChild(dummy1);
            let btn = document.createElement('button');
            btn.type = 'button';        
            btn.className = 'btn'+(i+2);
            btn.innerHTML = 'delete';
            div.appendChild(btn);
            btn.addEventListener('click',function()
            {
                const docref = doc(db,'chats',chats[i].id);
                deleteDoc(docref).then(()=>{
                    repeat();
                }
                )                   
            });
            
            


            
            
        }
    })
})
let chats = [];

onSnapshot(q,(snapshot)=>{
    chats = [];
    snapshot.docs.forEach((doc)=> {
        chats.push({
            ...doc.data(),id:doc.id,
        })
        console.log(chats);
        
    })
    


})
const btn1 = document.querySelector(".btn1");

btn1.addEventListener('click',function()
{
    document.querySelector('.div').innerHTML = "";
    for(let i =0; i<chats.length;i++)
    {
        
        let br = document.createElement('br');
        let dummy = document.createTextNode(chats[i].chat);
        let dummy1 = document.createTextNode(' (' + chats[i].name + ')');
        let div = document.querySelector('.div');
        div.appendChild(br);
        div.appendChild(dummy);
        div.appendChild(dummy1);
        let btn = document.createElement('button');
        btn.type = 'button';        
        btn.className = 'btn'+(i+2);
        btn.innerHTML = 'delete';
        div.appendChild(btn);
        btn.addEventListener('click',function()
        {
            const docref = doc(db,'chats',chats[i].id);
            deleteDoc(docref).then(()=>{
                repeat();
            }
            )                   
        });
        
        


        
        
    }

})



function repeat (){

    document.querySelector('.div').innerHTML = "";
    for(let i =0; i<chats.length;i++)
    {
        
        let br = document.createElement('br');
        let dummy = document.createTextNode(chats[i].chat);
        let dummy1 = document.createTextNode(' (' + chats[i].name + ')');
        let div = document.querySelector('.div');
        div.appendChild(br);
        div.appendChild(dummy);
        div.appendChild(dummy1);
        let btn = document.createElement('button');
        btn.type = 'button';        
        btn.className = 'btn'+(i+2);
        btn.innerHTML = 'delete';
        div.appendChild(btn);
        btn.addEventListener('click',function()
        {
            const docref = doc(db,'chats',chats[i].id);
            deleteDoc(docref).then(()=>{
                repeat();
                

            }
                
                
                
                

            )
            
        



            
        });
        
        


        
        
    }
}



/*







let books = [];
let i = 0;


function library(bookname,pages,read)
{
    this.bookname = bookname;
    this.pages = pages;
    this.read = read;
    
}

library.prototype.addbooktolibrary = function(){books[i] = this;i++;};
library.prototype.info = function(){return this.bookname + "has" + this.pages +"and" + this.read};

let theHobbit = new library("theHobbit",133,"True");
theHobbit.addbooktolibrary();


const btn = document.querySelector(".btn");

btn.addEventListener('click',function()
{
    
    let name1 = document.querySelector(".name").value;
    let page1 = document.querySelector(".page").value;
    let read1 = document.querySelector(".read").value;    
    window[name1] = new library(name1,page1,read1);
    window[name1].addbooktolibrary();
    console.log(books);
});

const btn1 = document.querySelector(".btn1");

btn1.addEventListener('click',function()
{
    document.querySelector('.div').innerHTML = "";
    for(let i =0; i<books.length;i++)
    {
        
        let br = document.createElement('br');
        let dummy = document.createTextNode(books[i].bookname);
        let div = document.querySelector('.div');
        div.appendChild(br);
        div.appendChild(dummy);
        let btn = document.createElement('button');
        btn.type = 'button';        
        btn.className = 'btn'+(i+2);
        btn.innerHTML = 'delete';
        div.appendChild(btn);
        btn.addEventListener('click',function()
        {
            books.splice(i,1);
        });
        let btn1 = document.createElement('button');
        btn1.type = 'button';
        btn1.className = 'btn1' + (i+2);
        btn1.innerHTML = 'toggleread';
        div.appendChild(btn1);
        btn1.addEventListener('click',function()
        {
            if(books[i].read == 'True')
            {books[i].read = 'False';}
            else
            {books[i].read = 'True';}
        });
        


        
        
    }

})*/


    

