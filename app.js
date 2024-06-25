document.addEventListener('DOMContentLoaded',()=>{
    
    document.getElementById('advice-button').addEventListener('click', getAdvice)

    async function getAdvice(){
        //Added timestamp query to bypass cache on the api allowing unique request on each click
        const url = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`;
        const adviceNumber = document.getElementById('advice-number');
        const adviceBody = document.getElementById('advice');

        try{
            const response = await axios.get(url);
            const advice = response.data.slip;
            adviceNumber.innerText = advice.id;
            adviceBody.innerText = advice.advice;            
        } catch(err){
            console.log(err)
        }
    } 
    getAdvice()
})