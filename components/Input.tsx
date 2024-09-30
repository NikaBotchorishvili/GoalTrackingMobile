import { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

type Props = {
	addGoal: (goal: string) => void;
};
const Input: React.FC<Props> = ({ addGoal }) => {
	const [goal, setGoal] = useState<string>("");
	const goalInputHandler = (enteredText: string) => {
		setGoal(enteredText);
	};

    const onAddGoal = () => {
        if (goal.trim().length === 0) return
        addGoal(goal);
        setGoal("")
    }

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder={"Meditating"}
				onChangeText={goalInputHandler}
				value={goal}
			/>
			<Button
				onPress={() => onAddGoal()}
				title="Submit"
				disabled={goal.trim().length === 0}
			/>
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		columnGap: 10,
	},
	input: {
		flex: 1,
		borderColor: "#000",
		borderWidth: 1,
		padding: 10,
	},
});
