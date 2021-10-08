import { Typography } from "antd";

const { Title } = Typography;

const Navbar = () => {
  return (
    <div className="bg-green-300 h-24 flex items-center pl-8">
      <div className="title-margin">
        <Title level={2} className="marginless-t">
          Mage Hithe Videos
        </Title>
      </div>
    </div>
  );
};

export default Navbar;
