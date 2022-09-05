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
    apiKey: "AIzaSyAmQvsrw-F6qE0aYBQAwpwGTs8CXQjUy5g",
    authDomain: "library-f9a44.firebaseapp.com",
    databaseURL: "https://library-f9a44-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "library-f9a44",
    storageBucket: "library-f9a44.appspot.com",
    messagingSenderId: "473935880201",
    appId: "1:473935880201:web:18eb00e70ee8f981d318d8"
};

initializeApp(firebaseConfig);



const db = getFirestore();

const colRef = collection(db, 'books');
getDocs(colRef).then((snapshot)=> {
    let books = [];
    snapshot.docs.forEach((doc)=> {
        books.push({
            ...doc.data(),id:doc.id,
        })
        
    })
})

const q = query(colRef,orderBy('createdAt'))

const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    addDoc(colRef,{
        name:addBookForm.name.value,
        page:addBookForm.page.value,
        read:addBookForm.read.value,
        createdAt:serverTimestamp(),
    }).then(()=>{
        addBookForm.reset();
    })
})
let books = [];

onSnapshot(q,(snapshot)=>{
    books = [];
    snapshot.docs.forEach((doc)=> {
        books.push({
            ...doc.data(),id:doc.id,
        })
        console.log(books);
        
    })
    


})
const btn1 = document.querySelector(".btn1");

btn1.addEventListener('click',function()
{
    document.querySelector('.div').innerHTML = "";
    for(let i =0; i<books.length;i++)
    {
        
        let br = document.createElement('br');
        let dummy = document.createTextNode(books[i].name);
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
            const docref = doc(db,'books',books[i].id);
            deleteDoc(docref).then(()=>{
                repeat();
            }
            )                   
        });
        let btn1 = document.createElement('button');
        btn1.type = 'button';
        btn1.className = 'btn1' + (i+2);
        btn1.innerHTML = 'toggleread';
        div.appendChild(btn1);
        btn1.addEventListener('click',function()
        {
            if(books[i].read == 'true')
            {
                const docRef3 = doc(db, 'books',books[i].id);
                updateDoc(docRef3,{
                    read:'false'
                })
            }
            else
            {
                const docRef3 = doc(db, 'books',books[i].id);
                updateDoc(docRef3,{
                    read:'true'
                })

            }
        });
        


        
        
    }

})



function repeat (){

    document.querySelector('.div').innerHTML = "";
    for(let i =0; i<books.length;i++)
    {
        
        let br = document.createElement('br');
        let dummy = document.createTextNode(books[i].name);
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
            const docref = doc(db,'books',books[i].id);
            deleteDoc(docref).then(()=>{
                repeat();
                

            }
                
                
                
                

            )
            
        



            
        });
        let btn1 = document.createElement('button');
        btn1.type = 'button';
        btn1.className = 'btn1' + (i+2);
        btn1.innerHTML = 'toggleread';
        div.appendChild(btn1);
        btn1.addEventListener('click',function()
        {
            if(books[i].read == 'true')
            {
                const docRef3 = doc(db, 'books',books[i].id);
                updateDoc(docRef3,{
                    read:'false'
                })
            }
            else
            {
                const docRef3 = doc(db, 'books',books[i].id);
                updateDoc(docRef3,{
                    read:'true'
                })

            }
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


    

