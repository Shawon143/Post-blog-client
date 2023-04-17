import React, { useState } from "react";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = {
      file: file,
      text: text,
      post: value,
    };
    console.log(formdata);

    try {
      const response = await axios.post(
        "http://localhost:7000/blog",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.insertedId) {
        alert("Added Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">Choose an image:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor="text">Enter some Title:</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="tex">Enter Your vlog</label>
          <ReactQuill onChange={setValue} modules={modules} formats={formats} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadImage;
