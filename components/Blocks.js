import { Typography } from 'antd';
import { Row, Col } from 'antd';
const { Text } = Typography;

const Blocks = (props) =>{
    return (
        <div className="block-frame">
            <Text>{props.vTitle}</Text>
        </div>
    )

}

export default Blocks;