import {StyleSheet,View} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import solidIcon from "./SolidIcon";
import regularIcon from "./RegularIcon";
import duoToneIcon from "./DuoToneIcon";
import getLightIcon from "./LightIcon";

function findIcon(type,nameID){
    let list;
    switch (type) {
        case "solid":list = solidIcon;break;
        case "regular":list = regularIcon;break;
        case "duotone":list = duoToneIcon;break;
        case "light":list = getLightIcon;break;
    }

    return list.find(({name,icon})=>{
        return nameID === name;
    }).icon;
}

function IconContainer({children, defaultStyle }){
    return <View style={ defaultStyle && styles.container }>{children}</View>
}

const styles = StyleSheet.create({
    container:{
        padding: 5,
        marginTop: 50,
        paddingBottom: 5
    },

})

export function FaIcon({type, icon, color, size, defaultStyle = true}) {
    return <IconContainer defaultStyle={defaultStyle}>
        <FontAwesomeIcon
            icon={findIcon(type,icon)}
            color={color}
            size={size} />
    </IconContainer>
}