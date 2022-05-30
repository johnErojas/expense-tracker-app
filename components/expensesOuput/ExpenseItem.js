import {Pressable, StyleSheet, View, Text} from "react-native";
import {GlobalStyles} from "../../constants/AppConstants";
import {getFormattedDate} from "../../utils/date";
import {useNavigation} from "@react-navigation/native";

function ExpenseItem({id, description, amount, date}) {
    const navigation = useNavigation();
    function expensePressHandle({id}){
        navigation.navigate("ManageExpenses",{
            id:id
        });
    }

    return <Pressable
        onPress={expensePressHandle.bind(this,{id:id})}
        style={({pressed})=> pressed && styles.pressed}
    >
        <View style={styles.outerView}>
            <View>
                <Text style={[styles.textBase, styles.description]}>{ description }</Text>
                <Text style={styles.textBase}>{ getFormattedDate(date) }</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>${ amount }</Text>
            </View>
        </View>
    </Pressable>
}

export default ExpenseItem;

const styles = StyleSheet.create({
    outerView: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        textShadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: .4
    },

    textBase: {
        color: GlobalStyles.colors.primary50
    },

    description: {
        fontSize: 15,
        marginBottom: 4,
        fontWeight: "bold"
    },

    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        minWidth: "25%"
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "bold"
    },
    pressed: {
        opacity: 0.75
    }
})