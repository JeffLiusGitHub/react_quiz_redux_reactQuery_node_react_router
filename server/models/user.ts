import mongoose from 'mongoose';
import { Password } from '../services/password';
//interface describes the properties that required to create user
interface UserAttrs {
	email: string;
	password: string;
}
//interface describes properties that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
	build(attrs: UserAttrs): UserDoc;
}
//interface describes properties that a user document has
interface UserDoc extends mongoose.Document {
	email: string;
	password: string;
	updatedAt?: string;
	createdAt?: string;
}

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		toJSON: {
			transform(doc: any, ret: any) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
			},
		},
		versionKey: false,
	}
);

userSchema.pre('save', async function (done) {
	if (this.isModified('password')) {
		const hashedPassword = await Password.toHash(this.get('password'));
		this.set('password', hashedPassword);
	}
	done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

// const buildUser = (attrs: UserAttrs) => {
// 	return new User(attrs);
// };

export { User };
