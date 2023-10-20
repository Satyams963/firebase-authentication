import {fb} from '../../firebase';
import {useState} from 'react';

const db = fb.firestore()
const Blogs = db.collection('blogs');



const CreateBlog= () => {
    const [title , SetTitle] = useState("");
    const [body , SetBody] = useState("");

    const sub = (e) => {
        e.preventDefault();
        // Add data to the store
        Blogs.add({
            Title: title,
            Body: body,
            publish: false,
            published_on: fb.firestore.Timestamp.fromDate(new Date())
        })
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    return (
        <div>
        <form onSubmit={(event) => {sub(event)}}>    
            <input className='container mt-3' type="text" placeholder="Title" 
            onChange={(e)=>{SetTitle(e.target.value)}} required />

            <textarea className='container mt-3' name="content" type="text" placeholder="write your content here" 
            rows="10" cols="150" onChange={(e)=>{SetBody(e.target.value)}} required >
            </textarea>

            <button className='container mt-3' type="submit">Submit</button>
        </form>
    </div>
    );
}

export default CreateBlog;