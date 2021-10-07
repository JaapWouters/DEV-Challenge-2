let plane = document.querySelector('.plane');
let plane2 = document.getElementById("plane1");
let rotsje = document.getElementById("rots");
let moveBy = 30;

// Vliegtuig positie
let PlanePosX = plane2.style.left;
let PlanePosY = plane2.style.top;

// Rots positie
let RotsPosX = rotsje.style.left;
let RotsPosY = rotsje.style.top;

window.addEventListener('load', () =>{
    plane.style.position = 'absolute';
    plane.style.left = 0;
    plane.style.top = 0;
});

 
window.addEventListener('keydown', (e) =>{
    switch (e.key){
        case 'ArrowLeft':
            plane.style.left = parseInt(plane.style.left) - moveBy + 'px';
            ArrowLeft();
            break;


        case 'ArrowRight':
            plane.style.left = parseInt(plane.style.left) + moveBy + 'px';
            ArrowRight();
            break;


        case 'ArrowUp':
            plane.style.top = parseInt(plane.style.top) - moveBy + 'px';
            ArrowUp();
            break;

            
        case 'ArrowDown':
            plane.style.top = parseInt(plane.style.top) + moveBy + 'px';
            ArrowDown();
            break;        
    }
});

function ArrowLeft() {
    plane2.classList.add("turnLeft");
}

function ArrowRight() {
    plane2.classList.remove("turnLeft");
}

// function ArrowUp() {
//     plane2.classList.add("turnUp");
// }

// function ArrowDown() {    
//     plane2.classList.remove("turnUp");
// }




function CheckCollision() {
    if(rectIntersect(plane2.x, plane2.y, plane2.width, plane2.height, rotsje.x, rotsje.y, rotsje.width, rotsje.height))
    {
        if (true) {
            ScoreCounter = ScoreCounter + 1;
            Score.innerHTML = "Score : " + ScoreCounter;
            ResetPlane();
        }
        else {
            return;
        }
    }
    else {
       return;
    }
}

function ResetPlane() {
    var RotsX = Math.floor(Math.random() * 1750);
    var RotsY = Math.floor(Math.random() * 800);

    rotsje.style.left = RotsX + "px";
    rotsje.style.top = RotsY + "px"; 

    return;
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    
    
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
        return false;
    }
    return true;
}