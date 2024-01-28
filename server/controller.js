module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["I see great wealth in your future!", "Hardships are ahead but you will overcome!", "You will see the benefits of your hardwork soon!", "Remember to unplug your hair straighter this week.", "Your avocado will be ripe on Thursday."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        console.log(randomIndex)
        let randomFortune = fortunes[randomIndex];
        console.log(randomFortune)
      
        res.status(200).send(randomFortune);
    }

}