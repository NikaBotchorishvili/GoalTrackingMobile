import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Item from "./components/Item";
import Input from "./components/Input";

export default function App() {
	const [goals, setGoals] = useState<string[]>([]);


	const addGoal = (goal: string) => {
		setGoals([...goals, goal]);
	};
	return (
		<View style={styles.container}>
			<View style={styles.addGoalContainer}>
				<Text style={styles.text}>Add Goal</Text>
				<Input
					addGoal={addGoal}
					
				/>
			</View>
			<View style={styles.goals}>
				<FlatList
					data={goals}
					renderItem={({ item }) => <Item item={item} />}
					keyExtractor={(item, index) => item + index}
					ItemSeparatorComponent={() => (
						<View style={{ height: 10 }} />
					)}
				/>
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
	goals: {
		borderTopColor: "#000",
		borderTopWidth: 1,
		paddingTop: 10,
		flex: 4,
		width: "80%",
	},
	addGoalContainer: {
		flex: 1,
		rowGap: 10,
		width: "80%",
	},
	text: {
		fontSize: 40,
	},
});