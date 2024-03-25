const db = require('../models');

// To use await, we need an async function.
async function seed() {
    try {
        let place = await db.Place.findOne({ name: 'H-Thai-ML' });
        
        if (!place) {
            console.error("Place not found!");
            return;
        }
     
        let comment = await db.Comment.create({
            author: 'Famished Fran',
            rant: false,
            stars: 5.0,
            content: 'Wow, simply amazing! Highly recommended!'
        });
        // Create another fake sample comment.
        let comment2 = await db.Comment.create({
            author: 'Crazy Karen',
            rant: false,
            stars: 1.0,
            content: 'Decent food but service could be better.'
        });


        // Add that comment to the place's comment array.
        place.comments.push(comment.id);
        place.comments.push(comment2.id);


        //save the place now that it has comment
        await place.save();
        
        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        // Exit the program
        process.exit();
    }
}

seed();
