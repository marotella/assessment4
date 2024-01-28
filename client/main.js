const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneBtn")
const numberBtn = document.querySelector("#numberBtn")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () =>{
    axios.get("http://localhost:4000/api/fortune/")
    .then(res =>{
        const data= res.data
        alert(data);
    })
}

const getNumber = () =>{
    axios.get("http://localhost:4000/api/number/")
    .then(res =>{
        const data= res.data
        alert(data);
    })
}

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
numberBtn.addEventListener("click", getNumber)