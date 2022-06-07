import {StyleSheet, View } from "react-native";
import {useContext, useLayoutEffect} from "react";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from "../constants/AppConstants";
import {Ico} from "../components/fontawesome/IconNames";
import {ExpensesContext} from "../store/expenses-context";
import ExpenseForm from "../components/managerExpenses/ExpenseForm";

function ManageExpenseScreen({route, navigation}) {
    const id = route.params?.id;
    const isEditing = !!id;
    const expensesCtx = useContext(ExpensesContext);
    const selectedExpense = expensesCtx.expenses.find(expense=>expense.id === id);

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

    function confirmHandler(expenseData) {
        if(isEditing){
            expensesCtx.updateExpense(id,expenseData);
        }else{
            expensesCtx.addExpense(expenseData)
        }
        navigation.goBack();
    }

    return <View style={styles.screen}>
        <ExpenseForm
            submitLabel={ isEditing ? "Update":"Confirm" }
            onCancel={cancelHandler}
            onSubmit={confirmHandler}
            defaultValues={selectedExpense}
        />

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

    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    },
});