import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Item from "./components/Item";
import Input from "./components/Input";
import uuid  from "react-native-uuid";
export type Goal = {
	id: string;
	text: string
}

export default function App() {
	const [goals, setGoals] = useState<Goal[]>([]);

	const addGoal = (goal: string) => {
		setGoals([...goals, { id: uuid.v4().toString(), text: goal}]);
	};


	const onDeleteItem = (id: string) => {
		setGoals((goals) => goals.filter((goal) => goal.id !== id))
	}
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
					renderItem={({ item }) => <Item onDeleteItem={onDeleteItem} item={item} />}
					keyExtractor={(item) => item.id}
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