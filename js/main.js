const searchEl = document.querySelector('.search'); //  querySelector 라는메소드로 document라는객체에서 클래스가.serch를 찾아서  serchEl변수에 활당한다. 
const searchInputEl = searchEl.querySelector('input'); //document도 요소로 볼수있다. 쉽게생각하면html이다.찾아놓은 요소부터찾으면좀더 최적화로 효율성이 높다. 


searchEl.addEventListener('click', function() {
  // serchEl변수에addEventLister라는 메소드를 추가하고 즉searchEl요소에click이벤트실행하면 어떤함수를실행하고그함수는핸들러이다.function기워드를사용하는익명함수에 어떤로직을실행할것인지.
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');  // classList객체add메소트실행
  searchInputEl.setAttribute('placeholder', '통합검색');  // set지정한다attribute는html속성이다
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');  // classList객체add메소트실행
  searchInputEl.setAttribute('placeholder', '');  // set지정한다attribute는html속성이다
});

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle (function() {
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // badge숨기기
    // badgeEl.style.display = 'none'; 잠시삭제하고....
    // gsap.to(요소,지속시간,옵션 );
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
  }else{
    // badge보이기
    // 
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
  });
}
}, 300));
  // console.log('scroll!');삭제하면서함수에
  //  window객체는 화면자체에 스크롤이벤드 추가해서 스크롤되면 익명의 함수를 실행한다.
  // _.throttle(함수,시간)



const fadeEls = document.querySelectorAll('.visual .fade-in');
// 변수fadeEls 찾아서변수에넣어줄것이다.도큐먼트에querySlec..메소드를실행해서
//선택자전부를찾아서fadeEls에활당한다.문자인수로visual,후손으로fade-in클래스를 찾아서 활당한다.
  fadeEls.forEach(function(fadeEl, index) {
  //fadeEls는반복적으로처리한다실제로fade-in갯수만큼forEach매수에인수민큼인수로적은함수가적용된다.gsap.to라는메소드는 
  gsap.to(fadeEl, 1, {
    delay:(index +1) *.7, // 처음에니메이션은.7, 1.4, 2.1,2.7실행된다
    opacity:1
  });
// gsap.to(요소,지속시간,옵션 );
});
new Swiper('.notice-line .swiper-container', {
  direction:'vertical',
  // autoplay: true,
  // loop: true
});  
// new Swiper(선택자,옵션)
// 소괄호css선택자인수를 넣어준다