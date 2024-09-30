import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Pressable,
	Image,
} from "react-native";
import Item from "./components/Item";
import InputModal from "./components/Input";
import uuid from "react-native-uuid";

export type Goal = {
	id: string;
	text: string;
};

export default function App() {
	const [goals, setGoals] = useState<Goal[]>([]);
	const [addGoalVisible, setAddGoalVisible] = useState<boolean>(false);
	const addGoal = (goal: string) => {
		setGoals([...goals, { id: uuid.v4().toString(), text: goal }]);
	};

	const onDeleteItem = (id: string) => {
		setGoals((goals) => goals.filter((goal) => goal.id !== id));
	};

	const openModal = () => {
		setAddGoalVisible(true);
	};
	const closeModal = () => {
		setAddGoalVisible(false);
	};
	return (
		<>
			<StatusBar style="dark" />
			<View style={styles.container}>
				<Image
					style={{ width: 100, height: 100 }}
					source={require("./assets/logo.png")}
				/>

				<Text style={styles.logoText}>Goal Tracker</Text>
				<Pressable style={styles.addGoalButton} onPress={openModal}>
					<Text style={styles.text}>Add Goal</Text>
				</Pressable>
				<InputModal
					addGoal={addGoal}
					closeModal={closeModal}
					modalVisible={addGoalVisible}
				/>
				<View style={styles.goals}>
					<FlatList
						data={goals}
						renderItem={({ item }) => (
							<Item onDeleteItem={onDeleteItem} item={item} />
						)}
						ListEmptyComponent={
							<Text style={{ ...styles.centerX, ...styles.text }}>
								No items in a list.
							</Text>
						}
						keyExtractor={(item) => item.id}
						ItemSeparatorComponent={() => (
							<View style={{ height: 10 }} />
						)}
					/>
				</View>
				<StatusBar style="auto" />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	logoText: {
		fontSize: 40,
		color: "white",
	},
	container: {
		flex: 1,
		paddingTop: 70,
		alignItems: "center",
		rowGap: 30,
		width: "100%",
	},
	goals: {
		borderTopColor: "#fff",
		borderTopWidth: 1,
		paddingTop: 10,
		flex: 4,
		width: "80%",
	},
	addGoalButton: {
		backgroundColor: "#06D6A0",
		paddingHorizontal: 70,
		paddingVertical: 15,
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "white",
	},
	centerX: {
		textAlign: "center",
	},
});
