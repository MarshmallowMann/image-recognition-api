
const handleProfileGet = (req, res, db) => {
    const {id}=req.params;
   db.select('*').from('users').where({
       id: id
   })
       .then(user => {
           if (user.length) {
               res.json(user[0]);
           } else {
               res.status(404).json('error getting user')
           }
       })

    // if (!found) {
    //     res.status(404).json('error')
    // }
}

module.exports = {
    handleProfileGet
}