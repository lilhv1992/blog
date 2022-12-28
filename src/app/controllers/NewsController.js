const Course = require('../models/Courses');
class NewsController{
    index(req, res, next){
        //res.render('news');
        // try {
        //     console.log(Course);
        //     Course.find({}, function (err, courses) {
        //         // docs.forEach
        //         if(!err){
        //             res.json(courses);
        //         }
        //         res.status(400).json({error:'loi'});
        //       });
        // } catch (error) {
        //     console.log(error);
        // }
        Course.find({})
        .then(courses => res.json(courses))
        //.catch(next) or
        .catch(err => next(err))
    }
    search(req, res){
        res.render('search');
    }
}
module.exports = new NewsController;