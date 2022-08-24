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

})


    

