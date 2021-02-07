// User controller

var User = require('../models/user')

// Returns student list
module.exports.list = () => {
    return User
        .find()
        .sort({name:1})
        .exec()
}

module.exports.lookUp = id  => {
    return User
        .findOne({number: id})
        .exec()
}

module.exports.lookUpById = id  => {
    return User
        .findById(id)
        .exec()
}

module.exports.register = (user) => {
    var newUser = new User
    ({
        username:  user.username,
        name : user.name,
        course : user.course,
        email : user.email,
        level: "user"
    })
    return User.register(newUser,user.password)
}

module.exports.login = user => {
    const {email, password} = user
    return User
        .findOne({ email: email, password: password })
        .exec()
}

module.exports.findAndUpdate = (id, profile) => {
    return User
        .findByIdAndUpdate(id, profile, { runValidators: true, new: true })
        .exec()
}

module.exports.delete = id =>{
    return User
        .findByIdAndDelete(id)
        .exec()
}