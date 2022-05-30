import {StyleSheet, View } from "react-native";
import {useContext, useLayoutEffect} from "react";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/AppConstants";
import {Ico} from "../components/fontawesome/IconNames";
import Button from "../components/UI/Button";
import {ExpensesContext} from "../store/expenses-context";

function ManageExpenseScreen({route, navigation}) {
    const id = route.params?.id;
    const isEditing = !!id;
    const expensesCtx = useContext(ExpensesContext);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEditing ? "Edit Expense":"Add Expense"
        })
    },[navigation, isEditing])//set vars, component no changes but as good practice

    function deleteExpenseHandler(){
        expensesCtx.deleteExpense(id);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if(isEditing){
            expensesCtx.updateExpense(id,{
                description: "text update",
                date: new Date(),
                amount: 15
            });
        }else{
            expensesCtx.addExpense({
                description: "text add",
                date: new Date(),
                amount: 15
            })
        }
        navigation.goBack();
    }

    return <View style={styles.screen}>
        <View style={styles.buttonsContainer}>
            <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
            <Button style={styles.button} onPress={confirmHandler}>{ isEditing ? "Update":"Confirm"}</Button>
        </View>
        { isEditing &&
            <View style={styles.deleteContainer}>
                <IconButton
                    color={GlobalStyles.colors.error500}
                    size={32}
                    icon={Ico.trash}
                    onPress={deleteExpenseHandler}
                />
            </View>
        }
    </View>;
}

export default ManageExpenseScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },

    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    button: {
        minWidth: 120,
        marginHorizontal: 8
    },

    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    },
});