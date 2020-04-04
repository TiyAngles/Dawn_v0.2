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

class Swipes {
    constructor(item, dur, chi){
        this.item = item;
        this.dur = dur;
        this.chi = chi;
    }

    setItem(item, chi){
        
        const widths = chi[0].offsetWidth;
    }

    sliding(item, dur){
       setItem();
       let pos = this.widths;
       if(){
        item.style.left = -pos;
       }else if(){
        item.style.left = pos;
       }
    }
    item.addEventListener("mousedown",setItem);
    item.addEventListener("mousemove", sliding);
    item.addEventListener("mousedrop", function(){
        return false;
    });
}

var test = new Swipes(slide_wrap, 500, con_slide);
// Event -> Search
// mousedown d는 이거라서 