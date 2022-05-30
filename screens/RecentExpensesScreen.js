import {StyleSheet, View,Text} from "react-native";
import ExpensesOutput from "../components/expensesOuput/ExpensesOutput";
import {ExpensesContext} from "../store/expenses-context";
import {useContext} from "react";
import {getDateMinusDays} from "../utils/date";

function RecentExpensesScreen() {
    const expensesCtx = useContext(ExpensesContext);
    const recent = expensesCtx.expenses.filter(expense => {
        const today = new Date();
        const the7DaysAgo = getDateMinusDays(today,7);
        return expense.date > the7DaysAgo;
    })
    return <ExpensesOutput
        expenses={recent}
        expensesPeriod="Last 7 days"
        fallbackText="No expenses registered for the last 7 Days"
    />
}

export default RecentExpensesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});