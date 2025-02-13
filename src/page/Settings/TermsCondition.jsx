import React from 'react';
import  { useState, useRef, } from 'react';
import JoditEditor from 'jodit-react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Input, QRCode, Space } from 'antd';


const TermsCondition = () => {
  const [text, setText] = React.useState('foisalrk2@gmail.com');
  const editor = useRef(null);
  const [content, setContent] = useState('');
  // const [isLoading, seLoading] = useState(false)
  const navigate = useNavigate(); 
  // const handleTerms = () => {
  //     console.log(content)
  // }
  const config = {
      readonly: false,
      placeholder: 'Start typings...',
      style: {
          height: 600,
      },
      buttons: [
          'image', 'fontsize', 'bold', 'italic', 'underline', '|',
          'font', 'brush',
          'align'
      ]
  }

  return (
    <div className=" mx-auto ">
      <div className="flex justify-between mb-7 mt-4">
      <h1 className="flex gap-4">
          <button
            className="text-[#EF4849] "
            onClick={() => navigate(-1)} 
          >
            <FaArrowLeft />
          </button>
          <span className="text-lg font-semibold">Terms & Condition</span>
        </h1>
        
      </div>

      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={newContent => setContent(newContent)}
        // onChange={newContent => { }}
      />
      

      <div className="mt-5 flex justify-center">
        <button
       
          className="bg-[#02111E] py-2 px-4 rounded text-white"
        >
          Save & change
        </button>
      </div>
      <Space direction="vertical" align="center">
      <QRCode style={{width:'500px' , height:'500px'}} value={text || '-'} />
      {/* <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> */}
    </Space>
    </div>
  );
};

export default TermsCondition;
