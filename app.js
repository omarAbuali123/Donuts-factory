// let name = prompt ("Enter your name");

// let gender = prompt ("Enter your gender");

// function Type(){
// let gender=prompt ("Enter your gender").toLowerCase();
// while(gender != "male" && gender != "female"){
//     gender=prompt("Enter your gender");

// }

// if (gender == "male"){
//     alert("Welcome sir " + name);
// }
// else if (gender == "female"){
//     alert("welcome mrs " + name);
// }
// }
// Type();

// let order = prompt ("Dount or Coffee or Ice cream or Bakery");
// let ordername = prompt (" enter your order");
// alert ("their order is getting prepared");
// console.log(name + order);

// let myArray = [name, gender, order, ordername]

// for(let i = 0; i< myArray.length; i++){
//     console.log(myArray[i]);
// }

/*q1 */

// console.log(-5*3);
// console.log("JavaScript" + 50);
// console.log( 17 % 5);
// console.log( 5 % 17);
// console.log( 5/10);
// console.log((4 === '4'));
// console.log((4 != 5));
// console.log((7 <= 8));
// console.log("Hello" + 5);
// console.log( Math.ceil(1) - Math.floor(2));
// console.log( Math.pow(1,2));

/*q2 */

// let num = prompt ("Enter your num");
// alert(num);

/*q3*/

// let num1 = prompt ("Enter your num");
// let num2 = prompt ("Enter your num");

// if(num1 > num2){
//     alert(num2 +"'"+ num1)
// }

// if(num2 > num1){
//     alert(num1  +"'"+ num2 )
// }

/*q4*/

// let num3 = prompt ("Enter your num");
// let num4 = prompt ("Enter your num");

// if(num3 > num4){
//     alert(num3)
// }

// if(num4 > num3){
//     alert(num4)
// }


/* q5*/

// let num1 =Number( prompt ("Enter your num"));
// let num2 =Number( prompt ("Enter your num"));
// alert( sum = num1 + num2)


/*q6 */


// let Number = 4;
// switch(Number) {
//     case 1:
//         console.log("ONE");
//         break;
//     case 2:
//         console.log("TWO");
//         break;
//     case 3:
//         console.log("THREE");
//         break;
//     case 4:
//         console.log("FOUR");
//         break;
//     case 5:
//         console.log("FIVE");
//         break;
//     case 6:
//         console.log("SIX");
//         break;
//     case 7:
//         console.log("SEVEN");
//         break;
//     case 8:
//         console.log("EIGHT");
//         break;
//     case 9:
//         console.log("NINE");
//         break;
//     default:
//         console.log("PLEASE TRY AGAIN");
// }



/*q7 */

// for(let i =0; i<=5; i++){
//     alert(i);
// }

/*q8 */
// let q8 =[];
// for(let i =0; i<=5; i++){
//     q8.push(i);
//     alert(q8);
// }


/*q9 */
// let q9 =[]
// for(let i = 0; i<= 20; i++){
//     if(i % 3 ===0){
//         q9.push(i)
//     }
// }
// alert(q9);

/*q10*/

// let Number1 = prompt("Enter number");
// while(Number1 >100 || Number1< 0){
//     alert("Error")
//     Number1 = prompt("Enter number")
// }
// alert("god job")

/*q11 */

// let Number2 = prompt("Enter number");
// let sum = 0;
// for (let i =0; i<=Number2; i++){
//     sum = sum + i;
// }
// alert(sum)
/////////////////////////////////////////////////////////////ex4

// const section = document.querySelector("section");
// const newdiv = document.createElement("div");
// newdiv.style.backgroundColor= "red";
// newdiv.style.height="300px";
// const paragraphElement = document.createElement("p");
// const listElement = document.createElement("ul");

// const liname = document.createElement("li");
// liname.textContent = "my name is : " + name ;
// const ligender = document.createElement("li");
// ligender.textContent = "my gender is : " + gender ;

// const liorder = document.createElement("li");
// liorder.textContent = "my order is : " + order ;

// const liordername = document.createElement("li");
// liordername.textContent = "my ordername is : " + ordername ;


// document.body.insertBefore(newdiv, section);
// newdiv.appendChild(paragraphElement);
// paragraphElement.appendChild(listElement);
// listElement.appendChild(liname);
// listElement.appendChild(ligender);
// listElement.appendChild(liorder);
// listElement.appendChild(liordername);    


let form = document.getElementById(2);
let p = document.getElementById(9);

function submit(event){
    event.preventDefault();

    let username = document.getElementById('3').value;
    let age = document.getElementById("4").value;
    let gender = document.getElementById("5").value;
    let orderType = document.getElementById("6").value;
    let drink = document.querySelector('input[name ="ho"]:checked').value;
    p.innerHTML = "user name : " + username + "  your age is :  " + age + " gender is : " + gender + " orderType is : " + orderType + " drink is : " + drink;
}
form.addEventListener("submit", submit);