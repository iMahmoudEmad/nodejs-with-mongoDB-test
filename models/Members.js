const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const textLength = {
	minLength: 5,
	maxLength: 50,
};

const membersSchema = new Schema({
	id: {
		type: Number,
		required: true,
		min: 250,
		max: 999,
	},
	name: {
		type: String,
		required: true,
		minlength: textLength.minLength,
		maxlength: textLength.maxLength,
	},
	attends: {
		type: Object,
		required: true,
		attend: {
			type: Number,
		},
		invitation: {
			type: Number,
		},
		sauna: {
			type: Number,
		},
		jacuzzi: {
			type: Number,
		},
		steam: {
			type: Number,
		},
		is_attend_today: {
			type: Boolean,
		},
		total_attends_today: {
			type: Number,
		},
	},
	mobile: {
		type: Number,
		minlength: 11,
		maxlength: 11,
	},
	address: {
		type: String,
		minlength: textLength.minLength,
		maxlength: textLength.maxLength,
	},
	email: {
		type: String,
		minlength: textLength.minLength,
		maxlength: textLength.maxLength,
	},
	subscription_type: {
		type: String,
		minlength: textLength.minLength,
		maxlength: textLength.maxLength,
	},
	classes: {
		type: String,
	},
	start_date: {
		type: Date,
		required: true,
	},
	end_date: {
		type: Date,
		required: true,
	},
	birthday_date: {
		type: Date,
	},
	national_id: {
		type: Number,
		minlength: 14,
		maxlength: 14,
	},
	job: {
		type: String,
		minlength: textLength.minLength,
		maxlength: textLength.maxLength,
	},
	duration_of_subscription: {
		type: Number,
		required: true,
	},
	sex: {
		type: String,
		required: true,
	},
	weight: {
		type: Number,
	},
	height: {
		type: Number,
	},
	offering: {
		type: String,
		minlength: textLength.minLength,
		maxlength: textLength.maxLength,
	},
	hear_about: {
		type: Object,
		hear_about_friend: {
			type: Object,
			id: {
				type: Number,
				minlength: 3,
				maxlength: 3,
			},
			name: {
				type: String,
				minlength: textLength.minLength,
				maxlength: textLength.maxLength,
			},
		},
	},
	residual: {
		type: Number,
		minlength: 3,
		maxlength: 3,
	},
	price: {
		type: Number,
		minlength: 3,
		maxlength: 3,
	},
	discount: {
		type: Number,
		minlength: 3,
		maxlength: 3,
	},
	note: {
		type: String,
		minlength: textLength.minLength,
		maxlength: textLength.maxLength,
	},
	freeze: {
		type: Object,
		is_freezed: {
			type: Boolean,
		},
		date: {
			type: Date,
		},
	},
	is_updated_today: {
		type: Boolean,
		date_of_updated: {
			type: Date,
		},
	},
	added_date: {
		type: Date,
		required: true,
	},
	who_is_added: {
		type: String,
		minlength: textLength.minLength,
		maxlength: textLength.maxLength,
		required: true,
	},
	branch: {
		type: String,
		required: true,
	},
}, {
	timestamps: true
});

membersSchema.plugin(mongoosePaginate);
const Members = mongoose.model('Members', membersSchema);

module.exports = Members;