/* GET about page */
const about = (req, res) => {
    res.render('generic-text', { title: 'About Loc8r' });
};

module.exports = {
    about
};