// let demo = document.getElementById('demo')
// window.prompt('How old are you?')
// let name = 'ade'
// console.log('My name is ade',names);
// document.write('Happy day')

// function submit() {
// console.log('submitted successfully.')
//     demo.innerHTML = 'submitted successfully'
// }
// let x = 2;
// let y = 5

// let namesOfStudents = ['Ade', 'Titi', 'Tolu']
// console.log(namesOfStudents.length);


// let student = {name: 'Grace', age:12, school:'OIC'}
// console.log('This is for student:' ,typeof(student))

// console.log('Names of Students',typeof(namesOfStudents))

// let ispresent = true
// console.log('answer to is presnt',typeof(ispresent))

// console.log(typeof(x))
// console.log(x + y)

// let availableStudent = [{name:'Grace', age:12, school:'OIC', is present:true}]


// let demo = document.querySelector('.demo')
// let menu = document.getElementById('menu')
// demo.textcontent = 'Good morning'
// function purchase(){
//    menu.innerHTML = 'You have successfully purchased this product'
   


// // }
// let a = 5
// let b = 7
// let grade =45
// console.log(a - b)
// let boy = 'Jide'
// let girl = 'Bola'
// console.log(boy + girl) 
// console.log( a !=b)

// if(a && b ==5) {
//     console.log('correct')
// }else {
//     console.log('Wrong ')
// }

// if(grade >=50) {
//     console.log('pass')
// }else{
//     console.log('fail')
// }
// let age = 17
// if (age >=18){
//     console.log('your are eligible to vote')
// }else if(age = 17){
//     console.log('you are colse to been eligible to vote')
// }
// else{

// }

// grade < 20 ? console.log('pass'): console.log('Fail')

// let mark = 25
// if (mark >=70){
//     console.log('A')
// }else if(mark >= 60){
//     console.log('B')

// }else if(mark >=50){
//     console.log('C')

// }else if(mark >=40){
//     console.log('D')
// }else {
//     console.log('F')
// }

// let result = document.getElementById('result')
// let ageOfVoter = document.getElementById('age')

// function checkEligibility(){
//     if(age.value > 18){
//         result.innerHTML = 'You are eligible to vote.'
//     }else{
//         result.innerHTML = 'You are not eligible to vote'
//     }
// }

// let result = document.getElementById("result")
// let gradeOfStudent = document.getElementById("score")

// function checkResult() {
//     if (gradeOfStudent.value >= 70) {
//         result.innerHTML = "Your grade is A"
//     } else if (gradeOfStudent >=60) {
//         result.innerHTML = "Your grade is B"
//     } else if (gradeOfStudent.value >=50) {
//         result.innerHTML = "Your grade is C"
//     } else if (gradeOfStudent.value >=40) {
//         result.innerHTML = "Your grade is D"
//     } else if (gradeOfStudent.value >=30) {
//         result.innerHTML = "Your grade is F"
//     }
// }

// function calAge(birthyear){
//     return birthyear - 2024
// }
// console.log('Your age is:', calAge(1867));

// function times (a, b){
//     return a * b
// }
// console.log(times(6,9));

// const calAge = (birthyear) =>{
//     return birthyear - 2024
    
// }
// console.log('your age is:',calAge(2008));

// const calAge = (birthyear) => 2024 - birthyear
// console.log(calAge(2019));


    

let btnOne = document.getElementById('one') 
let display = document.getElementById('display')
const answer = 0
function one(){
    display.value += 1
}
function two(){
    display.value += 2
}
function three(){
    display.value += 3
}
function four(){
    display.value += 4
    
}
function five(){
    display.value += 5
}
function six(){
    display.value += 6
}
function seven(){
    display.value += 7
}
function eight(){
    display.value += 8
    
}
function nine(){
    display.value += 9
}
function zero(){
    display.value += 0
}

function plus(){
    display.value += '+'
}
function clearAll(){
    display.value = ''
}
function multiplication(){
    display.value += '*'
}
function division(){
    display.value += '/'
}
function subtraction(){
    display.value += '-'
}
 function equal(){
    //answer = eval(display.value);
    display.value = eval(display.value)
    //console.log(eval(display.value));
    //display.value = answer;
 }