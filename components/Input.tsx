import { useState } from "react";
import {
	TextInput,
	Text,
	View,
	StyleSheet,
	Modal,
	Pressable,
} from "react-native";

type Props = {
	addGoal: (goal: string) => void;
	modalVisible: boolean;
	closeModal: () => void;
};
const Input: React.FC<Props> = ({ addGoal, modalVisible, closeModal }) => {
	const [goal, setGoal] = useState<string>("");
	const goalInputHandler = (enteredText: string) => {
		setGoal(enteredText);
	};

	const onAddGoal = () => {
		if (goal.trim().length === 0) return;
		addGoal(goal);
		setGoal("");
		closeModal();
	};

	return (
		<Modal animationType="slide" visible={modalVisible}>
			<View style={styles.addGoalContainer}>
				<Text style={styles.headerText}>Add Goal</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder={"example: *Meditating"}
						onChangeText={goalInputHandler}
						value={goal}
					/>
					<View style={styles.actions}>
						<Pressable
							style={styles.actionButton}
							onPress={closeModal}
						>
							<Text style={styles.text}>Close</Text>
						</Pressable>
						<Pressable
							style={styles.actionButton}
							disabled={goal.trim().length === 0}
							onPress={onAddGoal}
						>
							<Text style={styles.text}>Submit</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
		flexDirection: "column",
		justifyContent: "center",
		height: "auto",
		alignItems: "center",
		rowGap: 20,
	},
	input: {
		width: "100%",
		borderColor: "#000",
		borderWidth: 1,
		padding: 10,
	},
	addGoalContainer: {
		flex: 1,
		rowGap: 10,
		width: "80%",
		marginTop: 100,
		marginHorizontal: "auto",
	},
	headerText: {
		fontSize: 40,
		textAlign: "center",
	},
	text: {
		color: "white",
		textAlign: "center",
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		columnGap: 20,
	},
	actionButton: {
		flex: 1,
		backgroundColor: "#670e3c",

		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 8,
	},
});
