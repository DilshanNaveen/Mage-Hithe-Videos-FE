import { Typography } from 'antd';
import { Row, Col } from 'antd';
const { Text } = Typography;

const Blocks = (props) =>{
    return (
        <div className="block-frame">
            <div className="block-inside">
                <Text>{props.vTitle}</Text>
            </div>
            
        </div>
    )

}

export default Blocks;