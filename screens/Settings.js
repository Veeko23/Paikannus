    import {View, Text, StyleSheet} from 'react-native'
    import React, { useState } from 'react'
    import { Picker } from '@react-native-picker/picker'
  


    export default function Settings(props){
        const [selectedType, setSelectedType] = useState(props.mapType)

        return(
            <View style={styles.settingsArea}>
                <Text style={styles.heading}>Map Type</Text>
                <Picker selectedValue={selectedType} onValueChange={(itemValue) =>{
                    setSelectedType(itemValue)
                    props.setMapType(itemValue)
                }}>
                    <Picker.item label="Standard" value="standard" />
                    <Picker.item label="Terrain" value="terrain" />
                    <Picker.item label="Satellite" value="satellite" />
                </Picker>
            </View>
        )
    }

    const styles = StyleSheet.create({
        settingsArea: {
            marginTop: 32,
            marginLeft: 16
        },
        heading: {
                textTransform: 'uppercase'
        },
    });