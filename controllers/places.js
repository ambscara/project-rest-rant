const router = require('express').Router()

// More code here in a moment
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'public/images/max-griss-otLqpb9LK70-unsplash (1) copy.jpg'

      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'public/images/CatCafe.jpg'
      }]
      
    res.render('places/index', { places })
})

module.exports = router
