/* GET about page */
const about = (req, res) => {
    res.render('index', { title: 'About Express' });
};

module.exports = {
    about
};