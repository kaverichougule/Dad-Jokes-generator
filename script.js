let TellJokeBtn=document.getElementById("btn")
const ApiKey="vDXWhR7bnV9iJxSXtFZnhg==1aaJfifPZEOS6f4d"
const Joke=document.getElementById("joke")
const audio = new Audio("./click.mp3")
const laugh = new Audio("./girlLaugh.mp3")

const options={
    method:"GET",
    headers:{
        "X-Api-Key": ApiKey,
    },
}
const ApiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke(){
    audio.play()
    Joke.innerText="Updating..."
    TellJokeBtn.disabled=true;
    TellJokeBtn.innerText="Loading..."
    const response=await fetch(ApiUrl,options);
    const data=await response.json();
    Joke.innerText=data[0].joke
    laugh.play()
    TellJokeBtn.disabled=false
    TellJokeBtn.innerText="Tell Me a Joke"
}
TellJokeBtn.addEventListener("click",getJoke)

