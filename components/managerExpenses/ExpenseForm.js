import {StyleSheet, View, Text, Alert} from "react-native";
import Input from "./Input";
import {GlobalStyles} from "../../constants/AppConstants";
import {useState} from "react";
import Button from "../UI/Button";
import {getFormattedDate, inputDateToDate} from "../../utils/date";

function ExpenseForm({onCancel, onSubmit, submitLabel, defaultValues}) {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        }
    });

    function inputChangeHandler(key, value) {
        setInputs(current => {
            return {
                ...current,
                [key]: {value: value, isValid: true}//check when submit
            }
        })
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,//+ cast as number
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }

        // validation:
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            //feedback to user
            //Alert.alert("Invalid Data","Please check your inputs values")
            setInputs(({amount, date, description}) => {
                return {
                    amount: {value: amount.value, isValid: amountIsValid},
                    date: {value: date.value, isValid: dateIsValid},
                    description: {value: description.value, isValid: descriptionIsValid}
                }
            });
            return;
        }

        onSubmit(expenseData);
    }


    const formIsInvalid = !inputs.amount.isValid
        || !inputs.date.isValid
        || !inputs.description.isValid;

    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
            <Input label="Amount"
                   inputConfig={{
                       keyboardType: 'decimal-pad',
                       onChangeText: inputChangeHandler.bind(this, 'amount'),
                       value: inputs.amount.value
                   }}
                   style={styles.rowInput}
                   invalid={!inputs.amount.isValid}
            />
            <Input label="Date"
                   inputConfig={{
                       placeholder: "YYYY-MM-DD",
                       maxLength: 10,
                       onChangeText: inputChangeHandler.bind(this, 'date'),
                       value: inputs.date.value
                   }}
                   style={styles.rowInput}
                   invalid={!inputs.date.isValid}
            />
        </View>
        <Input label="Description"
               inputConfig={{
                   multiline: true,
                   //autocorrect: true // default is true
                   autoCapitalize: 'none',
                   onChangeText: inputChangeHandler.bind(this, 'description'),
                   value: inputs.description.value
               }}
               invalid={!inputs.description.isValid}
        />

        {formIsInvalid && <Text style={styles.errorText}>Invalid Data, Please check your inputs values</Text>}

        <View style={styles.buttonsContainer}>
            <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
            <Button style={styles.button} onPress={submitHandler}>{submitLabel}</Button>
        </View>

    </View>
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontWeight: "bold",
        color: "white",
        fontSize: 24,
        marginVertical: 24,
        textAlign: "center"
    },
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowInput: {
        flex: 1
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24
    },

    button: {
        minWidth: 120,
        marginHorizontal: 8
    },

    errorText: {
        textAlign: "center",
        color: GlobalStyles.colors.error500,
        margin: 8
    }
})