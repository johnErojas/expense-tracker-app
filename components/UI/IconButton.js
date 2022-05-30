import { StyleSheet, Pressable, View} from "react-native";
import {FaIcon} from "../fontawesome/Icons";
import {GlobalStyles} from "../../constants/AppConstants";

function IconButton({icon, type = "solid", size, color, onPress, style}) {
    return <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.container, style]}>
            <FaIcon
                icon={icon}
                type={type}
                size={size}
                color={color}
                defaultStyle={false}
            />
        </View>
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: .25
    }
})
