function Model(id,name,brandid){
    this.Id=id;
    this.Name=name;
    this.BrandId=brandid
}

let model1=new Model(1,"RS7",1)
let model2=new Model(2,"A8",1)
let model3=new Model(1,"S-class",2)
let model4=new Model(2,"E-class",2)
let model5=new Model(1,"M5",3)
let model6=new Model(2,"M3",3)
let carbrand=[]
carbrand.push(model1)
carbrand.push(model2)
carbrand.push(model3)
carbrand.push(model4)
carbrand.push(model5)
carbrand.push(model6)

let brand=document.forms.carform.elements.Brand
let model=document.forms.carform.elements.Model



let brandsoptions = document.querySelectorAll("select[name='Brand'] option");
let modelsoptions = document.querySelectorAll("select[name='Model'] option");
brand.addEventListener("change",function (e) {
    
    e.preventDefault();
    
    for (let j = 1; j < modelsoptions.length; j++) {
        modelsoptions[j].remove()
    }
    for (let i = 0; i < carbrand.length; i++) {
        if(carbrand[i].BrandId==parseInt(this.value)){
            
            let option=document.createElement("option")
            option.setAttribute("value",carbrand[i].Id)
            option.innerText=carbrand[i].Name
            model.appendChild(option)
            console.log(option.innerText);
        }
        
    }
})
let allowDrow = (event) =>{
    event.preventDefault();
}
let dropElement=(event)=>{
    event.preventDefault();
    
    let files = [...event.dataTransfer.files];
    for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onloadend=()=>{
            let img = document.createElement("img");
            img.src = reader.result;
            event.target.append(img);
        };
    }
}

let button = document.querySelector(".imgselect")
let imgdivv=document.querySelector(".imgdiv")
button.addEventListener("click" ,function(e){
    
    e.preventDefault();
    let inputfiles=document.forms.carform.elements.inputname.files
    let filesarray=[...inputfiles]
    filesarray.forEach(file=>{
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            let img = document.createElement("img");
            img.src = reader.result;
            imgdivv.append(img);
            
        };
        
    });
})
let mainbutton = document.querySelector(".Add")
mainbutton.addEventListener("click",function () {
    let rows=document.querySelector(".custom")


    let col=document.createElement("div")
    col.setAttribute("class", "col-lg-4")
    rows.appendChild(col)

    let createcard=document.createElement("div")
    createcard.setAttribute("class", "card")
    col.appendChild(createcard)

    let imgcard=document.createElement("div")
    imgcard.setAttribute("class", "imgsection")
    createcard.appendChild(imgcard)

    let imgcreate=document.createElement("img")
    imgcreate.setAttribute("class", "cardimg")
    imgcard.appendChild(imgcreate)

    let textcards=document.createElement("div")
    textcards.setAttribute("class", "textsection")
    createcard.appendChild(textcards)
    
    let createh=document.createElement("h1")
    createh.setAttribute("class", "cardh1")
    
    let createp1=document.createElement("p")
    createp1.setAttribute("class", "cardp1")
    
    let createp2=document.createElement("p")
    createp2.setAttribute("class", "cardp2")
    
    let createp3=document.createElement("p")
    createp3.setAttribute("class", "cardp3")
    createh.innerText=brand.options[brand.selectedIndex].innerText+" "+ model.options[model.selectedIndex].innerText
    textcards.appendChild(createh)
    // let h=document.querySelector(".cardh1")
    // let p1=document.querySelector(".cardp1")
    // let p2=document.querySelector(".cardp2")
    // let p3=document.querySelector(".cardp3")
    let inputt=document.querySelectorAll("input")
    
    for (let i = 0; i < inputt.length; i++) {
        createp1.innerText="Il: "+ inputt[0].value
        createp2.innerText="Qiymet: "+ inputt[1].value
        createp3.innerText=inputt[2].value + "/" + inputt[3].value + "/" + inputt[4].value
        
    }
    
    textcards.appendChild(createp1)
    textcards.appendChild(createp2)
    textcards.appendChild(createp3)
    
   
    let divimg=document.querySelectorAll(".imgdiv img")
    
    for (let j = 0; j < divimg.length; j++) {
        let a=divimg[0].getAttribute("src")
        
        imgcreate.setAttribute("src" , a)
    }
    imgcard.appendChild(imgcreate)
})