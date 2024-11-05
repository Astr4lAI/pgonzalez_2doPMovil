import { useState } from "react";
import { View , Text, TextInput, Button} from "react-native";

export default function Actividad({ actividad, borrarActividad, completarActividad }: {actividad:any, borrarActividad:any, completarActividad:any}) { 
    return (
        <View>
            <Text style={{ textDecorationLine: actividad.completado? 'line-through' : 'none' }}>
                {actividad.descripcion}
            </Text>
            <Button
                title={actividad.completado? 'completado': 'sin completar'} 
                onPress={() => completarActividad (actividad.id)}
            />
            <Button title="Eliminar" onPress={() => borrarActividad (actividad.id)} />
        </View>
    );
}