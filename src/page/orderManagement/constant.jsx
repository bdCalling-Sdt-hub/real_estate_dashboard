import { Menu } from "antd";
import { Link } from "react-router-dom";

export const menu = (id) => (
  <Menu>
    <Menu.Item key="1">
      <Link to={`/dashboard/order-management/order-details/edit-order/${id}`}>
        Edit Order
      </Link>
    </Menu.Item>

    <Menu.Item key="2">
      <Link
        to={`/dashboard/order-management/order-details/edit-services/${id}`}
      >
        Edit Services
      </Link>
    </Menu.Item>
    <Menu.Item key="3">Cancel Order</Menu.Item>
  </Menu>
);
