//active가 붙으면 원하는 방향으로 이동한다
//inner-0

// var active_slide = document.getElementsByClassName('active');
// $('.slider-inner .inner')./이벤트가 발생하면/{
//     active가 붙는다
// }


var con_slide = document.querySelectorAll(".slider-visual .inner");
const slide_wrap = document.querySelector(".slider-inner");


console.error(slide_wrap)
function slidSelect(){
    for( i = 0; i < con_slide.length; i++){
        con_slide[i].style.backgroundImage = `url('./img/slider/visual_slider_img_${i+1}.jpg')`;
    }
}
slidSelect()


// Slide Object

// class Swipes {
//     constructor(item, dur, chi){
//         this.item = item;
//         this.dur = dur;
//         this.chi = chi;
//     }

//     setItem(item, chi){
        
//         const widths = chi[0].offsetWidth;
//     }

//     sliding(item, dur){
//        setItem();
//        let pos = this.widths;
//        if(){
//         item.style.left = -pos;
//        }else if(){
//         item.style.left = pos;
//        }
//     }
//     item.addEventListener("mousedown",setItem);
//     item.addEventListener("mousemove", sliding);
//     item.addEventListener("mousedrop", function(){
//         return false;
//     });
// }

// var test = new Swipes(slide_wrap, 500, con_slide);
// Event -> Search
// mousedown d는 이거라서 

// --------------------------------------------------------- //

const slider = document.getElementsByClassName()[0];
const info = document.getElementsByClassName()[0];

let canMove = false;
let touchDown = 0;
let prevX = 0;
let slides = document.getElementsByClassName('c-slide');
const slideWidth = slides[0].offsetWidth + 20;


const init = () => {
  slider.addEventListener('mousedown', handleMouse);
  slider.addEventListener('mouseup', handleMouse);
  slider.addEventListener('mousemove', handleMove);
  
  slider.addEventListener('touchstart', handleTouch);
  slider.addEventListener('touchmove', handleTouchMove);
};


const handleMouse = e => {
  if (e.type === 'mouseup') {
    canMove = false;
  } else {
    canMove = true;
  }
};

const handleMove = e => {
  if (e.pageX < prevX && canMove) {

    info.innerHTML = 'Swiping left!';
    handleSwipeLeft();
    canMove = false;
  } else if (e.pageX > prevX && canMove) {
    
    info.innerHTML = 'Swiping right!';
    handleSwipeRight();
    canMove = false;
  }

  prevX = e.pageX;
};


const handleTouch = e => {
  touchDown = e.touches[0].clientX
}

const handleTouchMove = e => {
  if (!touchDown) {
    return
  }

  const touchUp = e.touches[0].clientX
  const touchDiff = touchDown - touchUp

  if (touchDiff > 0) {
    info.innerHTML = 'Swiping left!';
    handleSwipeLeft();
  } else {
    info.innerHTML = 'Swiping right!';
    handleSwipeRight();
  }

   touchDown = null
 };


const handleSwipeLeft = () => {  
  slideses.fromTo(slider, 1, 
    {
      x: '0px'
    },
    {
      x: `-${slideWidth}px`,
      ease: Power4.easeOut
    }
  );
  
  slideses.to(slider, 0.001, 
    {
      x: '0px',
      onComplete: () => {
        slider.appendChild(slides[0]);
        slides = document.getElementsByClassName('c-slide');
      }
    }
  );
};

const handleSwipeRight = () => {  
  slideses.to(slider, 0.001, 
    {
      x: `-${slideWidth}px`,
      onComplete: () => {
        const first = slides[0];
        const last = slides[slides.length - 1];
        slider.insertBefore(last, first);
        slides = document.getElementsByClassName('c-slide');
      }
    }
  );
  
  slideses.to(slider, 1, 
    {
      x: `0px`,
      ease: Power4.easeOut
    }
  );
};

init();