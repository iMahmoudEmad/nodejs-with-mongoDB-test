const Classes = require('../models/Class');

// Show list of singleClass
const index = (req, res, next) => {
    Class.paginate()
        .then((response) => {
            res.json({
                response,
            });
        })
        .catch((error) => {
            res.json({
                message: 'An error Occured!',
            });
        });
};

// Show single singleClass
const show = (req, res, next) => {
    let classID = req.body.classID;
    Class.findById(classID)
        .then((response) => {
            res.json({
                response,
            });
        })
        .catch((error) => {
            res.json({
                message: 'An error Occured!',
            });
        });
};

// Add new singleClass
const store = (req, res, next) => {
    let singleClass = new Classes({
        total_classes: req.body.total_classes,
        total_mens_classes: req.body.total_mens_classes,
        total_womens_classes: req.body.total_womens_classes,
        total_payment: req.body.total_payment,
        total_mens_payment: req.body.total_mens_payment,
        total_womens_payment: req.body.total_womens_payment
    });

    singleClass
        .save()
        .then((response) => {
            res.json({
                message: 'Class Added Successfully!'
            });
        })
        .catch((error) => {
            res.json({
                message: 'An error Occured!'
            });
        });
};

// Update an singleClass
const update = (req, res, next) => {
    let classID = req.body.classID;
    let updatedData = new Classes({
        id: req.body.id,
        name: req.body.name,
        attends: {
            attend: req.body.attends.attend,
            invitation: req.body.attends.invitation,
            sauna: req.body.attends.sauna,
            jacuzzi: req.body.attends.jacuzzi,
            steam: req.body.attends.steam,
            is_attend_today: req.body.attends.is_attend_today,
            total_attends_today: req.body.attends.total_attends_today,
        },
        mobile: req.body.mobile,
        address: req.body.address,
        email: req.body.email,
        subscription_type: req.body.subscription_type,
        classes: req.body.classes,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        birthday_date: req.body.birthday_date,
        national_id: req.body.national_id,
        job: req.body.job,
        duration_of_subscription: req.body.duration_of_subscription,
        sex: req.body.sex,
        weight: req.body.weight,
        height: req.body.height,
        offering: req.body.offering,
        hear_about: {
            hear_about_friend: req.body.hear_about.hear_about_friend,
        },
        residual: req.body.residual,
        price: req.body.price,
        discount: req.body.discount,
        note: req.body.note,
        freeze: {
            is_freezed: req.body.freeze.is_freezed,
            date: req.body.freeze.date,
        },
        is_updated_today: req.body.is_updated_today,
        added_date: req.body.added_date,
        branch: req.body.branch,
        who_is_added: req.body.who_is_added,
    });

    Classes.findByIdAndUpdate(classID, {
            $set: updatedData,
        })
        .then(() => {
            res.json({
                message: 'Class updared successfully!',
            });
        })
        .catch((error) => {
            res.json({
                message: 'an error Occured!',
            });
        });
};

// delete an singleClass
const destroy = (req, res, next) => {
    let classID = req.body.classID;
    Class.findOneAndRemove(classID)
        .then(() => {
            res.json({
                message: 'Class deleted successfully!',
            });
        })
        .catch((error) => {
            res.json({
                message: 'an error Occured!',
            });
        });
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};