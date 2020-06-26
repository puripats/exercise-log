const User = require('../models/user.model');
const Exercise = require('../models/exercise.model');
const moment = require('moment');


//Simple version, without validation or sanitation
// exports.test = function (req, res) {
//     res.send('Greetings from the Test controller!');
// };


exports.newUser = function (req, res) {
    const user = new User(req.body)
    user.save(function(err,data){
        if (err) return err;
        return res.send(data)
    })
    //res.send(user)

};

exports.users=async function (req,res){
   const user = await User.find({})
   res.send(user)
}

exports.logs= function (req,res){
    // console.log(req.query.from)
    // console.log(req.query.to)
//var myCount = await Url.countDocuments({});
    const dateFrom = new Date(req.query.from)
    const dateTo = new Date(req.query.to)
    // const date3 = new Date('2020-01-15')
    // console.log(date1)
    // console.log(date2)
    // console.log(date3)

    // console.log(moment(date2).isBetween(date1,date3))
    if (dateFrom !=null && dateTo!=null){
        Exercise.find({
            owner:req.params.id,
            date:{
                $gte: dateFrom,
                $lt: dateTo
            }
        },(err,data)=>{
            if (err) return err;
            console.log(data)
        }
        )
    }



    Exercise.find({owner:req.params.id}, (err,data)=>{
        if (err) return err;

        res.send(data)
   }).exec((err,results)=>{
       var myCount = results.length
       console.log(myCount)
   })




 }