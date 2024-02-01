import { StyleSheet } from "react-native";

export default  StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 10,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    image: {
      width: '100%',
      height: 200, // Adjust this value as needed
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    content: {
      padding: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
    },
    description: {
      color: '#666',
    },
  });
  