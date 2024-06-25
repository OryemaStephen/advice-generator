const url = `https://api.adviceslip.com/advice`;
const adviceNumber = document.getElementById('advice-number');
const adviceBody = document.getElementById('advice');

async function getAdvice(){
    try{
        const response = await axios.get(url);
        const advice = response.data.slip;
        adviceNumber.innerText = advice.id;
        adviceBody.innerText = advice.advice;
        
    } catch(err){
        console.log(err)
    }
}

getAdvice();