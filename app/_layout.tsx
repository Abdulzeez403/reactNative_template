import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import toastConfig from '@/service/toast';
import AsyncStorage from '@react-native-async-storage/async-storage';


export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "Ubuntu_Bold": require('../assets/fonts/Ubuntu-Bold.ttf'),
        "Ubuntu_BoldItalic": require('../assets/fonts/Ubuntu-BoldItalic.ttf'),
        "Ubuntu_Regular": require('../assets/fonts/Ubuntu-Regular.ttf'),
        "Ubuntu_Medium": require('../assets/fonts/Ubuntu-Medium.ttf'),
        ...FontAwesome.font,
    });

    useEffect(() => {
        // const checkTokenAndNavigate = async () => {
        //  const token = await AsyncStorage.getItem('token');
        //     if (!token) {
        //         router.replace('/signin');
        //     } else {
        //         router.replace('/passcode');
        //     }
        // };

        // checkTokenAndNavigate(); // Execute the async function

        // Handle splash screen
        if (loaded) {
            SplashScreen.hideAsync();
        }

        if (error) throw error;
    }, [loaded, error]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}



function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
                 <GestureHandlerRootView style={{ flex: 1 }}>
                          <BottomSheetModalProvider>
                                     <SafeAreaProvider>
                                    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                                 <Stack>
                                         <Stack.Screen name="index" options={{ headerShown: false }} />     
                                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

                             </Stack>

                                                            <Toast config={toastConfig} />
                                                            <Toast />
                                                        </ThemeProvider>
                                                    </SafeAreaProvider>
                                                </BottomSheetModalProvider>
                                            </GestureHandlerRootView>

                            
    );
}
