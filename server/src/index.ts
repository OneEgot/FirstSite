import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/router';
import config from 'config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
const Serve = async () => {
	app.listen(config.get('PORT'), (err:any) => {
		if(err){
			console.log(err);
			return;
		}
		else{
			console.log(`Server was started in ${config.get("PORT")} PORT`)
		}
	});
	await mongoose.connect(config.get("URI"), (err:any) => {
			if(err){
				console.log(err);
				return;
			}
			else{
				console.log('Success connect database')
			}
	})
}
Serve()
