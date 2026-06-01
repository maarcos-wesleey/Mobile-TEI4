import 'react-native-gesture-handler'
import React from 'react'
import { registerRootComponent } from 'expo'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import TaskList from './src/screens/TaskList'

function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <TaskList />
        </GestureHandlerRootView>
    )
}

registerRootComponent(App)