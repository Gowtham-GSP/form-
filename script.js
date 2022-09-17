const signup = e =>{
    let formData={
        firstnmame: document.getElementById("firstname").value,
        lastnmame: document.getElementById("lastname").value, 
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value,
        pin: document.getElementById("pin").value,
        state: document.getElementById("state").value,
        country: document.getElementById("country").value,
    }

localStorage.setItem('formData'.JSON.stringify(formData));
console.log(localStorage.getItem('formData'));
dispData();
e.preventDefault();
}
function dispData(){
    let{firstnmame,lastnmame,address1,address2,pin,state,country}=JSON.parse(localStorage.getItem('formdata'));
    // var output=document.getElementById("output");
    output.innerHTML=
 <table>
     <tbody>
     <tr>
         <td>firstname</td>
         <td>${firstnmame}</td>
     </tr>
     <tr>
         <td>lasttname</td>
         <td>${lastnmame}</td>
     </tr>
     <tr>
         <td>address1</td>
         <td>${address1}</td>
     </tr>
     <tr>
         <td>address2</td>
         <td>${address2}</td>
     </tr>
     <tr>
         <td>pin</td>
         <td>${pin}</td>
     </tr>
     <tr>
         <td>state</td>
         <td>${state}</td>
     </tr>
     <tr>
         <td>country</td>
         <td>${country}</td>
     </tr>

 </tbody>
     </table>
    
};
