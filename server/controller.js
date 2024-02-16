let fortunes = ["Opportunities are endless when you embrace change with an open heart.", "Your kindness will be repaid tenfold in unexpected ways.", "A journey of a thousand miles begins with a single step; take it boldly.", "Good news is on its way to brighten your day. Stay hopeful!", "Your creativity knows no bounds. Let it flourish.", "Believe in yourself, for you possess the power to achieve greatness.", "Wisdom is found not in the answers but in the questions you ask.", "The key to unlocking happiness lies within your own perspective.", "Challenges are opportunities in disguise. Face them fearlessly.", "In every setback lies the seed of an even greater success. Keep pushing forward."]

let states = [' Texas', ' Vermont', ' Nevada', ' Alabama', ' Oregon', ' Iowa', ' Kentucky', ' Utah', ' Montana', ' Rhode Island']

let colors = [' Blue', ' Red', ' Black', ' Green', ' Blue']

let cars = [' Jeep', ' F150', ' Mustang', ' Suburban', ' Corvette']

// let attendees = [
//     {
//         id: 0,
//         name: "Derrick Furtado",
//         favDish: "Pizza"
//     }
// ]
// let globalID = 1


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const readings = fortunes

        let randomIndex = Math.floor(Math.random() * readings.length)
        let randomFortune = readings[randomIndex]

        res.status(200).send(randomFortune)
    },
    getState: (req, res) => {
        const stateList = states

        res.status(200).send(stateList)
    },
    getColor: (req, res) => {
        const colorList = colors

        res.status(200).send(colorList)
    },
    getCars: (req, res) => {
        const carList = cars

        res.status(200).send(carList)
    },
    deleteCars: (req, res) => {

    }












    //     createName: (req,res) => {          // WIP
    //         let {name, favDish} = req.body

    //         let newAttendee = {
    //             id: globalID,
    //             name,
    //             favDish
    //         }
    //         attendees.push(newAttendee)
    //         res.status(200).send(attendees)
    //         globalID++
    //     }
    // // put name && dish
    // // delete name && dish


}