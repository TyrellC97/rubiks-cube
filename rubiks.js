const sq1 = document.getElementById('sq1')
const sq2 = document.getElementById('sq2')
const sq3 = document.getElementById('sq3')
const sq4 = document.getElementById('sq4')
const sq5 = document.getElementById('sq5')
const sq6 = document.getElementById('sq6')
const sq7 = document.getElementById('sq7')
const sq8 = document.getElementById('sq8')
const sq9 = document.getElementById('sq9')

allSquares = [ sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9]

let colors = [ 'green', 'red', 'blue', 'orange', 'yellow', 'purple']

function getRandomColor1(){
    
     let randomIndex = Math.floor(Math.random() * colors.length);

     var pickedColor = colors[randomIndex];
     console.log(pickedColor)

    sq1.style.background = pickedColor
}
function getRandomColor2(){
    
     let randomIndex = Math.floor(Math.random() * colors.length);

     var pickedColor = colors[randomIndex];
     console.log(pickedColor)

    sq2.style.background = pickedColor
}
function getRandomColor3(){
    
     let randomIndex = Math.floor(Math.random() * colors.length);

     var pickedColor = colors[randomIndex];
     console.log(pickedColor)

    sq3.style.background = pickedColor
}
function getRandomColor4(){
    
     let randomIndex = Math.floor(Math.random() * colors.length);

     var pickedColor = colors[randomIndex];
     console.log(pickedColor)

    sq4.style.background = pickedColor
}
function getRandomColor5(){
    
     let randomIndex = Math.floor(Math.random() * colors.length);

     var pickedColor = colors[randomIndex];
     console.log(pickedColor)

    sq5.style.background = pickedColor
}
function getRandomColor6(){
    
     let randomIndex = Math.floor(Math.random() * colors.length);

     var pickedColor = colors[randomIndex];
     console.log(pickedColor)

    sq6.style.background = pickedColor
}
function getRandomColor7(){
    
     let randomIndex = Math.floor(Math.random() * colors.length);

     var pickedColor = colors[randomIndex];
     console.log(pickedColor)

    sq7.style.background = pickedColor
}
function getRandomColor8(){
    
     let randomIndex = Math.floor(Math.random() * colors.length);

     var pickedColor = colors[randomIndex];
     console.log(pickedColor)

    sq8.style.background = pickedColor
}
function getRandomColor9(){
    
     let randomIndex = Math.floor(Math.random() * colors.length);

     var pickedColor = colors[randomIndex];
     console.log(pickedColor)

    sq9.style.background = pickedColor
}


sq1.addEventListener('click', getRandomColor1)
sq2.addEventListener('click', getRandomColor2)
sq3.addEventListener('click', getRandomColor3)
sq4.addEventListener('click', getRandomColor4)
sq5.addEventListener('click', getRandomColor5)
sq6.addEventListener('click', getRandomColor6)
sq7.addEventListener('click', getRandomColor7)
sq8.addEventListener('click', getRandomColor8)
sq9.addEventListener('click', getRandomColor9)

