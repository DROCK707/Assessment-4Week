const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneCookie")
const statesBtn = document.getElementById("statesArr")
const colorBtn = document.getElementById("colorsArr")
const carBtn = document.getElementById("carsArr")
const removeCars = document.getElementById("deleteCars")
const removeStates = document.getElementById("deleteStates")
const removeColors = document.getElementById("deleteColors")









// const rsvpButton = document.getElementById("submitBtn")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
}
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data
            alert(data)
        })
}
const getState = () => {
    axios.get("http://localhost:4000/api/states")
        .then(res => {
            alert(res.data)
        })
}
const getColor = () => {
    axios.get("http://localhost:4000/api/colors")
        .then(res => {
            alert(res.data)
        })
}
const getCars = () => {
    axios.get("http://localhost:4000/api/cars")
        .then(res => {
            alert(res.data)
        })
}
const deleteCars = id => {
    axios.delete("http://localhost:4000/api/cars")
        .then(removeCars)
}






const postAttendee = () => {
    axios.post("http://localhost:4000/api/attendees", attendees)
        .then(res => {
            const data = res.data
            alert("Your RSVP is complete")
        })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
statesBtn.addEventListener('click', getState)
colorBtn.addEventListener('click', getColor)
carBtn.addEventListener('click', getCars)





