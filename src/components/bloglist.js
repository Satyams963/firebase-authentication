import React, { useState, useEffect }from 'react'
import { Link } from "react-router-dom";
import {fb} from '../firebase'


const db = fb.firestore()
const Blogs = db.collection('blogs');


const Bloglist = () => {
    const [blogslist, setblogs] = useState([]);

    const DeleteBlog = (id)=> {
        Blogs.doc(id).delete().then(() => {
            alert("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };

    useEffect(() => {
        // Subscribe to query with onSnapshot
        const unsubscribe = Blogs.limit(100).onSnapshot(querySnapshot => {
          // Get all documents from collection - with IDs
          const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));
          // Update state
          setblogs(data);
        });

        // Detach listener
        return unsubscribe;
      }, []);

    return (
        <div className='container'>
        <h2 className="w-full text-center font-bold text-xl">All blogs List</h2>
            {blogslist.map(blog=> (
                <div className='conatiner mb-5 ' key={blog.id}>
                    <p><b>Title</b> : {blog.Title}</p>
                    <p><b>Body</b>: {blog.Body} </p>
                    <Link to={"/blog/"+blog.id} style={{margin: "10px", textDecoration: "none", border: "2px solid black", padding:"3px 8px", color: "black", backgroundColor: "lightgreen"}}
                        >View
                    </Link>
                    <Link to={"/blog/edit/"+blog.id} style={{margin: "10px", textDecoration: "none", border: "2px solid black", padding:"3px 8px", color: "black", backgroundColor: "lightgray"}}
                        >Edit
                    </Link>
                    <button 
                        onClick={()=> {DeleteBlog(blog.id)}} 
                    >delete</button>
                </div>
            ))}
    </div>
    );
  };

export default Bloglist;