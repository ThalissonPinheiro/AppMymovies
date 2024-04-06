import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
star: {
    top: '21%',
    left: '75%',
    position: 'absolute',
    zIndex: 2,
    fontSize: 14,
    color: 'gold',
},
vie: {
    top: '16%',
    left: '75%',
    position: 'absolute',
    zIndex: 2,
    fontSize: 14,
    color: 'white',
},
back: {
    backgroundColor: '#111111',
},
img: {
    width: 400,
    height: 300,
    zIndex: 0,
},
overlay: {
    width: 400,
    height: 300,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...StyleSheet.absoluteFillObject,
},
titulo: {
    alignSelf: 'center',
    zIndex: 1,
    textAlign: 'center',
    marginTop: 35,
    fontSize: 20,
    fontFamily: 'arial black',
    color: '#D8315B',
},
card: {
    width: 170,
    height: 240,
    position: 'absolute',
    zIndex: 1,
    marginTop: 90,
    alignSelf: 'center',
},
sub: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 8,
    zIndex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    width: 300,
    height: 'auto',
    textAlign: 'justify',
    padding: 10,
},

})

export default styles;