anime({
    targets:'.container',
    scale: [0,1],
    duration: 1000,
    easing: 'easeInOutExpo',
})

const myFunction = () =>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if(email === "surajondev@gmail.com" && password === "surajondev@gmail.com"){
        anime({
            targets:'.container',
            scale:[1, 0],
            duration: 1000,
            easing: 'easeInOutExpo',
        })
    }
    else{
        anime({
            targets:'.container',
            translateX:[0,-50,50,0],
            duration: 400,
            easing: 'easeInOutExpo',
        })

        document.getElementById("error").innerHTML = "Wrong Credential"
    }
    
}