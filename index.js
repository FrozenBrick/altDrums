




var buttonLength = document.querySelectorAll("button")

for (let index = 0; index < buttonLength.length ; index++) {
    document.querySelectorAll('button')[index].addEventListener('click', function () {
        var buttonInner = this.innerText
        document.querySelector("."+buttonInner).classList.add('pressed')
        setTimeout(function(){
            document.querySelector("."+buttonInner).classList.remove('pressed')

        }, 300)
        
        var audio = new Audio ('./sounds/'+buttonInner+'.mp3')
        console.log(audio)
        audio.play()


     

})}

document.addEventListener('keydown', function (event) {
var keyInner = (event.key)  
      var audio = new Audio ('./sounds/'+keyInner+'.mp3')
      document.querySelector("."+keyInner).classList.add('pressed')
        setTimeout(function(){
            document.querySelector("."+keyInner).classList.remove('pressed')

        }, 300)
        console.log(audio)
        audio.play()

     

})
