import { Typography } from 'antd';

const { Title } = Typography;

const Navbar = () => {
    return (
        <div className="nav">
            <div className="title-margin">
                <Title level={2} className="marginless-t">Mage Hithe Videos</Title>
            </div> 
        </div>
    )
}

export default Navbar;