const Exercise = require('../models/exercise.model');
const User = require('../models/user.model')

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.addActivity=function (req,res){
         const userId=req.params.id
         var doneDate = req.body.date
         if (!doneDate){
             doneDate = new Date()
         }
    //     console.log(doneDate)

         const exercise = new Exercise({
             description:req.body.description,
             duration:req.body.duration,
             date:doneDate,
             owner:userId})
        exercise.save((err)=>{
            if (err) return err
        })
        res.send(exercise)

         //console.log(exercise)


        //User.findById({_id:req.params.id},(err,idFound)=>{
        
        
        
        
            //      console.log(idFound)
        //      if (err) return err;
        //  //    var activityToAdd = 'Shut up';
        //      //console.log(idFound.favoriteFoods);
        //      idFound.activities.push(activityToAdd);
             
        //      idFound.save(function(err){
        //        if (err) return err;
        //      });
        //      res.send(idFound);
        //  })
}