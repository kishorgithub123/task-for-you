let data=[
    {name:"kishor",src:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"vedant",src:"https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww"},
    {name:"pranjal",src:"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww"},
    {name:"karan",src:"https://media.istockphoto.com/id/1435686874/photo/pensive-clever-indian-or-arabian-guy-student-or-freelancer-using-laptop-working-or-studying.jpg?s=1024x1024&w=is&k=20&c=5YTBiLmbqpaZUMHIiMxz4kTy3SHqEYYqbuc3yF1Qe9U="},
    {name:"abhishke",src:"https://media.istockphoto.com/id/1485050088/photo/senior-adult-black-female-tourist-admiring-london-during-her-solo-trip.webp?b=1&s=170667a&w=0&k=20&c=pam3At8tQS3ChkTCB81VOhva_9EVyMQAjOIoDTSs9Vg="},
    {name:"pranjuli",src:"https://media.istockphoto.com/id/1466601581/photo/portrait-of-a-thoughtful-young-casual-girl-wearing-a-brown-shirt-looking-aside-isolated-over.webp?b=1&s=170667a&w=0&k=20&c=KwXk3BVFlcYHaAEX9siMaKs_RtHF3T_zG61dCcelGoE="},
    {name:"siddhant",src:"https://images.unsplash.com/photo-1546019170-f1f6e46039f5?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"nandani",src:"https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFufGVufDB8fDB8fHww"},
    {name:"kishore",src:"https://images.unsplash.com/photo-1461800919507-79b16743b257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8fDA%3D"}
]
let input=document.querySelector("input")
var pers='';
data.forEach(function(element){
pers+=` <div class="person">
<div class="img">
    <img src="${element.src}" alt="">
</div>
<h4>${element.name}</h4>
</div>`
})
document.querySelector(".people").innerHTML=pers
input.addEventListener("input",function(){
    var matching= data.filter(function(e){
        return e.name.startsWith(input.value)
     })
     console.log(matching)
    var newuser=''
     matching.forEach(function(element){
        newuser+=` <div class="person">
        <div class="img">
            <img src="${element.src}" alt="">
        </div>
        <h4>${element.name}</h4>
        </div>`
        })
        document.querySelector(".people").innerHTML=newuser
})