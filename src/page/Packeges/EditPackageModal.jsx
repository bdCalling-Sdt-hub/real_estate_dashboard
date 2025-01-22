import { Form, Input, Modal, Button, Upload } from "antd";
import { useState } from "react";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

export const EditPackageModal = ({ openAddModal, setOpenAddModal }) => {
    const [fileList, setFileList] = useState([]);
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
      const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };
  return (
    <Modal
      centered
      open={openAddModal}
      onCancel={() => setOpenAddModal(false)}
      footer={null}
      width={600}
    >
      <div className="mb-6 mt-4">
        <h2 className="text-center font-bold text-lg mb-11">Edit Package</h2>
        <Form layout="vertical">
          {/* Package Name */}
          <Form.Item
            label="Package Name"
            name="packageName"
            rules={[{ required: true, message: "Please enter the package name" }]}
          >
            <Input className="py-2" placeholder="Input here" />
          </Form.Item>

          {/* Price */}
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter the price" }]}
          >
            <Input className="py-2" type="number" placeholder="Input here" />
          </Form.Item>

          {/* Description */}
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter the description" }]}
          >
            <Input.TextArea  placeholder="Input here" rows={4} />
          </Form.Item>

          {/* Add Services/Products */}
          <Form.Item label="Add Services/Products" name="services">
            <div className="flex items-center gap-2">
              <Input
              className="py-2"
                prefix={<SearchOutlined />}
                placeholder="Search services/products"
              />
              <button className="py-2 bg-[#2A216D] text-white px-6 rounded-md" type="primary">Add</button>
            </div>
            <div className="mt-2 p-2 border border-gray-200 rounded">
              <p className="text-gray-500">• services/products</p>
            </div>
          </Form.Item>

          {/* Photos */}
          <Form.Item label="Photos">
          <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
          </Form.Item>

          {/* Buttons */}
          <div className="flex  gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-3 w-full border text-[#2A216D] rounded-md"
              onClick={() => setOpenAddModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-3 w-full bg-[#2A216D] text-white rounded-md"
            >
              Add
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};
