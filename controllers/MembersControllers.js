const Member = require('../models/Members');

// Show list of member
const index = (req, res, next) => {
    Member.paginate()
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

// Show single member
const show = (req, res, next) => {
    let memberID = req.body.memberID;
    Member.findById(memberID)
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

// Add new member
const store = (req, res, next) => {
    let member = new Member({
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

    member
        .save()
        .then((response) => {
            res.json({
                message: 'Member Added Successfully!',
            });
        })
        .catch((error) => {
            res.json({
                message: 'An error Occured!',
                error: error,
            });
        });
};

// Update an member
const update = (req, res, next) => {
    const id = req.body.id;

    Member.update({
            id: id
        }, {
            $inc: {
                attends: {
                    attend: 1
                }
            }
        })
        .then((res) => {
            res.json({
                message: `Member id No.${id} has updated successfully!`,
                res
            });
        })
        .catch((error) => {
            res.json({
                message: 'an error Occured!',
                error,
                id
            });
        });
};

// delete an member
const destroy = (req, res, next) => {
    let memberID = req.body.memberID;
    Member.findOneAndRemove(memberID)
        .then(() => {
            res.json({
                message: 'Member deleted successfully!',
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