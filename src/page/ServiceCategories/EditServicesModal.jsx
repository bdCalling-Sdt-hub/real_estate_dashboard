import { Form, Input, Modal, Button, Upload } from "antd";
import { useState } from "react";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

export const EditServicesModal = ({ openAddModal, setOpenAddModal }) => {
    
  return (
    <Modal
      centered
      open={openAddModal}
      onCancel={() => setOpenAddModal(false)}
      footer={null}
      width={600}
    >
      <div className="mb-6 mt-4">
        <h2 className="text-center font-bold text-lg mb-11">Edit Category</h2>
        <Form layout="vertical">
         
        <Form.Item
            label="Category Name"
            name="categoryName"
            rules={[{ required: true, message: "Please enter the package name" }]}
          >
            <Input className="py-2" placeholder="Input here" />
          </Form.Item>
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
