import { StyleSheet, Text, View } from "react-native"

type Props ={
    item: string
}

const Item: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#670e3c",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    itemText: {
        color: "white"
    }
})

export default Item