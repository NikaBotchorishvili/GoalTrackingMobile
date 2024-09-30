import { StyleSheet, Text, View, Pressable } from "react-native";
import { Goal } from "../App";

type Props = {
	item: Goal;
	onDeleteItem: (id: string) => void;
};

const Item: React.FC<Props> = ({ item, onDeleteItem }) => {
	return (
		<Pressable
			android_ripple={{ color: "#ddd" }}
			style={({ pressed }) => pressed && styles.pressedItem}
			onPress={onDeleteItem.bind(this, item.id)}
		>
			<View style={styles.item}>
				<Text style={styles.itemText}>{item.text}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#670e3c",
		width: "100%",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
	},
	itemText: {
		color: "white",
	},
	pressedItem: {
		opacity: 0.65,
	},
});

export default Item;
