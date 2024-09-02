import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';


const HomePage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text className="font-bold bg-red-300 text-lg">This is a React native template....</Text>
                </View>
        
        </SafeAreaView>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
