import {StyleSheet, View,Text} from "react-native";
import ExpensesOutput from "../components/expensesOuput/ExpensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses-context";

function AllExpensesScreen() {
    const expensesCtx = useContext(ExpensesContext);
    return <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod="All Expenses"
        fallbackText="No expenses registered found" />
}

export default AllExpensesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});