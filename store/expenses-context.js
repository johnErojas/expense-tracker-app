import {createContext, useReducer} from "react";
import DUMMY_EXPENSES from "./dummyData";


export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description,amount,date}) => {},
    deleteExpense: id => {},
    updateExpense: (id,{description, amount, date}) => {}
})

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{...action.payload, id:id },...state];
        case 'UPDATE':
            const targetIndex = state.findIndex(expense=> expense.id === action.payload.id);
            const targetExpense = state[targetIndex];
            const targetUpdated = {...targetExpense, ...action.payload.data}

            const updatedExpenses = [...state];
            updatedExpenses[targetIndex] = targetUpdated;
            return updatedExpenses;
        case 'DELETE':
            return state.filter(expense=> expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesCtxProvider({children}) {
    const [expenseState, dispatch] = useReducer(expensesReducer,DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: { id:id, data:expenseData } });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    const value = {
        expenses: expenseState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }

    return <ExpensesContext.Provider value={value}>
        { children }
    </ExpensesContext.Provider>
}

export default ExpensesCtxProvider;
