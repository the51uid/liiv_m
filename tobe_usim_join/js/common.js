window.addEventListener("load", ()=>{

    window.addEventListener('resize', setVh);
    setVh();

    const index = document.querySelector(".section__type");
    index.classList.add("active");

    containerPad();
    window.addEventListener("resize", containerPad);

    if(isMobile){
        document.querySelector("body").classList.add("mobile");
        getFootPad();
        window.addEventListener("resize", getFootPad);
    }
    
    const linkItem = Array.from(document.querySelectorAll(".link__item"));
    linkItem.forEach((item)=>{
        item.addEventListener("click", (e)=>{ e.preventDefault(); pageChange(item.dataset.link) })
    })
})

// 모바일 100vh 대응
const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
};

// mobile check
function chkMobile(agent) {
    const mobileRegex = [/Android/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i]
    return mobileRegex.some(mobile => agent.match(mobile))
}
const isMobile = chkMobile(window.navigator.userAgent)


// footer home bar check
const getFootPad = function(){
    const foot = Array.from(document.querySelectorAll("footer"));
    foot.forEach((item)=>{ console.log(item); item.style.bottom = `-${item.offsetHeight * 0.2}px`; })
}

// header, footer padding setting
const containerPad = function(){
    const head = document.querySelector("header");
    const foot = document.querySelector("footer");
    const contentWrap = document.querySelectorAll(".container__wrap");
    contentWrap.forEach((item)=>{
        item.style.paddingTop = `${head.offsetHeight}px`;
        item.style.paddingBottom = `${foot.offsetHeight}px`;
    });
}

// page link
const pageChange = function(link){
    console.log(link)
    const section = Array.from(document.querySelectorAll(".content__section"));
    section.forEach((item)=>{ item.classList.remove("active") })

    document.querySelector(`.${link}`).classList.add("active");
}