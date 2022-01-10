import { Text, View, Button } from 'react-native'
import { useState } from 'react';

export const Placeholder = () => {
    const [text, setText] = useState('');

    const fetchData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
    console.log(json)
    setText(json.title)  
    })}

    return (
        <View>
            <Text>
            {text}
            </Text>
            <Button
            onPress={fetchData}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}
