import { Link, useNavigate } from "react-router-dom";
import image from "../assets/header/login.png";
import { Checkbox, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { useLoginAdminMutation } from "../page/redux/api/userApi";
import { setToken } from "../page/redux/features/auth/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const[loginAdmin] = useLoginAdminMutation()
  const onFinish = async (values) => {
      try {
        console.log("Form Values:", values);
        const payload = await loginAdmin(values).unwrap();
        console.log("API Response:", payload);
        if (payload?.success) {
          dispatch(setToken(payload?.data?.accessToken))
          message.success("Login successful!");
          navigate("/");
        } else {
          message.error(payload?.message || "Login failed!");
        }
      } catch (error) {
        console.error("Login error:", error);
        message.error(error?.data?.message || "Something went wrong. Try again!");
      } finally {
       
        console.log("Login attempt finished.");
      }
  };
  return (
    <div className="min-h-screen grid grid-cols-2 bg-white">
      <div className="flex justify-center items-center">
        <img src={image} alt="" />
      </div>
      <div className="bg-[#EAE9F0] min-h-screen flex items-center justify-center">
        <div className="">
        <div className=" md:px-16 px-5 py-16 bg-white w-[600px] rounded">
          <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Login to Account
          </h2>
          <p className="pb-7">Please enter your email and password to continue</p>
          </div>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </Form.Item>

            <div className="flex items-center justify-between mb-4">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-gray-700">Remember me</Checkbox>
              </Form.Item>
              <Link
                to={"/forgetpassword"}
                className="text-sm text-[#2F799E] hover:underline focus:outline-none"
              >
                Forget password?
              </Link>
            </div>

            <Form.Item>
              <button
                type="submit"
                className="w-full mt-8 py-2 bg-[#2A216D] text-white rounded hover:bg-gray-800 focus:ring-2 focus:ring-gray-500"
              >
                Submit
              </button>
            </Form.Item>
          </Form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
