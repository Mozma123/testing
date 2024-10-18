import { React, useState } from 'react';
import '../App';
import { db } from '../config/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import Navbar from './navbar';
import Footer from './footer';
import hbhImage from '../asetes/hbh.jpeg'; 
function Post() {
  const [submit, setSubmit] = useState(false);
  const [image, setImage] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [uploading, setUploading] = useState(false); 

  const InstagramPost = ({ submit, image, description }) 
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = async () => {
    setUploading(true); 
    setSubmit(true); 

    try {
        const myData=collection(db, 'myData')
      await addDoc(myData, {
        image: image,
        description: description,
      });

    } catch (error) {
      console.log('error'); 
    }

    setUploading(false);
  };

  return (
    <>
     <Navbar /> 
    <Footer/>
      {!submit && (
        <>
          <h1
           style={{
            color: '#c77536',
}}
          >Select a photo</h1>
          <input
  type="file"
  onChange={handleImageChange}
  style={{
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '1.5rem',

    borderRadius: '5px',
    fontSize: '16px',
    color: 'green',
  }}
/>

          <h1 
          style={{
                      color: '#c77536',
          }}
          >Add Description</h1>
       <input
  type="text"
  placeholder="Add description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  style={{
    width: '180px',
    padding: '5px',
    borderRadius: '5px',
    marginLeft: '10px',  
    fontSize: '18px',
    backgroundColor: '#e6e8e8',
  }}
/>
            <button
            className='submit-btn'
  onClick={handleSubmit}
  disabled={uploading}
  
>
  {uploading ? 'Uploading...' : 'Submit'}
</button>
        </>
      )}
      {submit && (
  <div className="instagram-post">
    <div className="post-header">
      <img src={hbhImage} alt="Profile" className="profile-image" />
      <h4 className="username">Moazma Shk</h4>
    </div>
    {image && <img src={image} alt="myImage" className="post-image" />}
    <div className="post-footer">
      <div className="post-actions">
        <button className="like-button">❤️ </button>
        <button className="comment-button">💬</button>
        <button className="share-button">🔗</button>
              <button className="save-button">💾 Save</button>
      </div>
      <h3 className="caption-title">mozma___</h3>
      <p className="post-description">{description}</p>
    </div>
  </div>
)}
    </>
  );
}

export default Post;