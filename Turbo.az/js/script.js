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
console.log(brand)

let model=document.forms.carform.elements.Model
console.log(model)
let modelsoptions = document.querySelectorAll("select[name='Model'] option");
let brandsoptions = document.querySelectorAll("select[name='Brand'] option");
brand.addEventListener("change",function (e) {
    e.preventDefault();
    let modelsoptions = document.querySelectorAll("select[name='Model'] option");
    for (let j = 1; j < modelsoptions.length; j++) {
        modelsoptions[j].remove()
    }
    for (let i = 0; i < carbrand.length; i++) {
        if(carbrand[i].BrandId==parseInt(this.value)){
            
            let option=document.createElement("option")
            option.setAttribute("value",carbrand[i].Id)
            option.innerText=carbrand[i].Name
            model.appendChild(option)
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
    let h=document.querySelector(".cardh1")
    let p1=document.querySelector(".cardp1")
    let p2=document.querySelector(".cardp2")
    
    h.innerHTML=modelsoptions.innerHTML+brandsoptions.innerHTML
    
})