import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
	const [goal, setGoal] = useState<string>("");
	const [goals, setGoals] = useState<string[]>([]);
	const goalInputHandler = (enteredText: string) => {
		setGoal(enteredText);
	};

	const onAddGoal = () => {
		setGoals([...goals, goal]);
		setGoal("")
	}

	const goalElements = goals.map((currGoal, index) => {
		return <Text key={`${currGoal}-${index}`}>{currGoal}</Text>
	})
	return (
		<View className="mt-20" style={styles.container}>
			<View style={{ ...styles.item, ...{ rowGap: 10 } }}>
				<Text style={styles.text} className="">
					Add Goal
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder={"Meditating"}
						onChangeText={goalInputHandler}
						value={goal}
					/>
					<Button onPress={(e) => onAddGoal()} title="Submit" />
				</View>
			</View>
			<View style={{ ...styles.item, ...styles.goals }}>
				{goalElements}
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		alignItems: "center",
		width: "100%",
	},
	item: {
		width: "80%",
		paddingBottom: 20,
	},
	goals: {
		flex: 1,
		alignItems: "center",
	},
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
	text: {
		fontSize: 40,
	},
});
