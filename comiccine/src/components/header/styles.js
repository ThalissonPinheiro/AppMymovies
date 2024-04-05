import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: "space-between",
    },
    input: {
        justifyContent: 'center',
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        color: 'white',
        fontFamily: 'arial black',
    },
    logo: {
        height: 90,
        width: 110,
    },
    user: {
        borderRadius: '50%',
        height: 68,
        width: 70,
        marginTop: 15,
        marginRight: 10,
    }
})

export default styles;