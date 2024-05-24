let popularMovies=document.querySelector("#popular_movies");
let imgPath = 'https://image.tmdb.org/t/p/w500';

let leftIcon1=document.querySelector(".left_icon1")
let rightIcon1=document.querySelector(".right_icon1")


function getPopular(url){
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
        console.log(data);
        data.results.forEach(x=>{
            popularMovies.innerHTML+=`
                <div class="slider_card">
                    <img src=${imgPath+x.poster_path} alt="">
                    <p>${x.title}</p>
                </div>
            
            `
        })
    })
}

let count=0;

function slider1(){
    for(let i=0;i<popularMovies.children.length;i++){
        popularMovies.children[i].style.transform=`translateX(-${count*300}px)`
    }
}

// setTimeOut,setInterval

// setInterval(()=>{
//     if(count<popularMovies.children.length-4){
//        count++ 
//        slider1()
//     }else{
//       count=0
//       slider1()  
//     }
// },3000)


leftIcon1.addEventListener("click",()=>{
    if(count>0){
        count--
        slider1()
    }else{
        count=0
        slider1()
    }
})

rightIcon1.addEventListener("click",()=>{
    if(count<popularMovies.children.length-4){
        count++ 
        slider1()
     }else{
       count=0
       slider1()  
     }
})


window.addEventListener("load",()=>{
    getPopular("https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard")
})

