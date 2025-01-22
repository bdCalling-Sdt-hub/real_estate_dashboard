import React from "react";

export const UserDetailsPage = () => {
  return (
    <div className="p-5 max-w-3xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-5">
        {/* Header */}
        <h4 className="text-lg font-bold mb-5">Request For Information</h4>
        
        {/* User Info */}
        <div className="flex items-center mb-5">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Albert Mike"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <div className="font-bold">Albert Mike</div>
            <div className="text-gray-500 text-sm">&lt;albertmikephd@gmail.com&gt;</div>
            <div className="text-gray-500 text-sm">To: stevesmith24@gmail.com</div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-300 pt-5">
          {/* Message Body */}
          <p className="mb-3">Dear Smith,</p>
          <p className="mb-3">
            I have been following the impressive work of Bproperty for some time
            now, and I am particularly interested in staying updated on your
            latest ventures. Understanding the innovative approaches and
            high-quality developments your company consistently delivers, I am
            very excited to learn more about your newest project. I understand
            that you may be busy; however, your assistance in providing this
            information would be greatly valued.
          </p>
          <p className="mb-3">
            Please feel free to reach out to me via email or phone at your
            convenience.
          </p>
          <p className="mb-3">
            Thank you for your time and attention to this request. I look forward
            to hearing from you soon and potentially exploring opportunities to
            collaborate or invest in your exciting new project.
          </p>
          <p className="mb-3">
            Warm regards,
            <br />
            Albert Mike
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex space-x-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Reply
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
