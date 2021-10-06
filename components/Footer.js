import { Typography } from 'antd';
import { Row, Col } from 'antd';
const { Text } = Typography;

const Footer = () => {
    return (
        <div className="footer">
            <Row justify="space-around" type="flex" align="middle">
                <Col span={8}>
                    <Text type="secondary" align="middle" style={{textAlign:"center"}}>An educational opensorce project done by College students
                    <br />Frontend built with Next.js, Ant Design and ESLint</Text>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;