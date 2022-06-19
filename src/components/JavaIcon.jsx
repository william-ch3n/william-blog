import { Icon } from "@mui/material";
import java from '../static/img/java.png'
import '../static/css/programmingIcons.css'

function JavaIcon(props) {
    return (
        <Icon fontSize="large">
            <img className="java" src={java} alt=""/>
        </Icon>
    );
  }

export default JavaIcon;