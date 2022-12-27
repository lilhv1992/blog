const newsRoute = require('./news');
 route = (app) => {

    app.use('/news', newsRoute);

    // app.get('/', (req, res) => {
    //     res.render('home')
    //   });
  
}
module.exports  = route;