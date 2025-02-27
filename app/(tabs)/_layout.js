import { Tabs } from "expo-router"

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Home' }}></Tabs.Screen>
            <Tabs.Screen name="main-screen" options={{ title: 'Main' }}></Tabs.Screen>
        </Tabs>
    )
}
