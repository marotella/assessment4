const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneBtn")
const numberBtn = document.querySelector("#numberBtn")
const dateBtn = document.querySelector("#dateBtn")
const activityBtn = document.querySelector("#activityBtn")
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

const getDate = () => {
    axios.get("http://localhost:4000/api/date/")
    .then(res => {
        const data= res.data
        alert(data)
    })
}

const getActivity = () => {
    axios.get("http://localhost:4000/api/activity/")
    .then(res => {
        const data= res.data
        alert(data)
    })
}
complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
numberBtn.addEventListener("click", getNumber);
dateBtn.addEventListener("click", getDate);
activityBtn.addEventListener("click", getActivity)