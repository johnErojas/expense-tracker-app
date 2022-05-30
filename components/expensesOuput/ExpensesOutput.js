import { StyleSheet, View, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {GlobalStyles} from "../../constants/AppConstants";
import DUMMY_EXPENSES from "../../store/dummyData";

function ExpensesOutput({expenses, expensesPeriod, fallbackText})
{
    const content = <Text style={styles.infoText}>{fallbackText}</Text>
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            { expenses.length > 0 ? <ExpensesList expenses={expenses}/> : content}
        </View>
    )
}


export default ExpensesOutput;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    },

    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: "center",
        marginTop: 32
    }
})