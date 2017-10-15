
import axios from "axios";

// Cloudinary help files
const Cloudinary_Url = '    https://api.cloudinary.com/v1_1/tripod/upload';
const API_Key = '447781538358186';
const Coudinary_Upload_preset = 'mtmzmtt5';


export default {

	//Cloudinary upload
	postCloudinary: function( picData ) {
	  console.log(picData.file.coords);
	  const formData = new FormData();
	  formData.append("file",picData.file);
	  formData.append("tags", `codeinfuse, medium, gist`);
	  formData.append("upload_preset", Coudinary_Upload_preset);
	  formData.append("api_key", API_Key);
	  formData.append("timestamp", (Date.now() / 1000) | 0);

	  return axios.post(Cloudinary_Url, formData, {
      	  sheaders: { "X-Requested-With": "XMLHttpRequest" },
      });
	},

	// Read from Mongo
	getPicDetails: function(){
	  return axios.get("/api/activity")
		.then(function(res){
		  console.log("axios resutls",res);
			// return res;
		});
	},

	// Save in Mongo
	savePicDetails: ( url, lat, long, pid ) => {
	  const newPic = { pic_url: url, pic_latitude: lat, pic_longitude: long ,pic_public_id: pid };
	  console.log("Save Mongo : " + url);
	  return axios.post("/api/activity", newPic)
	  	.then(function(res) {
	  		console.log("axios result" , res.data._id);
	  		return res.data_id;
	  	})
	}

};
