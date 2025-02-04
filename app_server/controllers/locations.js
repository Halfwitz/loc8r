/* GET home page */
const homeList = (req, res) => {
    res.render('locations-list', { title: 'Loc8r - Home' });
};

/* GET 'Location Info' page */
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location Info' });
};

/* GET 'Add Review' page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add Review' });
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};