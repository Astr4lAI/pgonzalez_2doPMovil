import { useState } from "react";
import { View , Text, TextInput, Button} from "react-native";
import Actividad from "./Actividad";

export default function Actividades() {
    const [actividades, setActividades] = useState([
        {id: 1, descripcion: '1a. Catedra de Ingenieria', completado: true },
        {id: 2, descripcion: 'Platica de servicio social', completado: false},
        {id: 3, descripcion: 'Baja de materias ago-dic 2024', completado: false},
        {id: 4, descripcion: 'Feria del libro en UAC', completado: true},
        {id: 5, descripcion: 'Periodo de examenes parciales septiembre', completado: false},
    ]); 
    const [descripcion, setDescripcion] = useState("");

    function agregarActividad() {
        const nuevaActividad = { id: Date.now(), descripcion, completado: false};
        setActividades([...actividades, nuevaActividad]);
        setDescripcion('');
    }

    function borrarActividad(id: number){
        setActividades(actividades.filter(elemento => elemento.id !== id));

    }

    function completarActividad(id: number) {
        setActividades(actividades.map (
            elemento => (elemento.id === id ?
                { ...elemento, completado: !elemento.completado}
                :
                elemento)));
    }

    return (
        <View style={{ padding: 20 }}>
            <Text style={{fontSize: 25 }}>
                Agenda Universitaria
            </Text>
 
            <TextInput
                value={descripcion}
                onChangeText={setDescripcion}
                placeholder="Nueva Actividad"
                />
            
            <Button title="Agregar Actividad"  onPress={agregarActividad} />
            
            <Text style={{ fontSize: 20, paddingTop: 10}}>
                Lista de Actividades
            </Text>
            {actividades.map(elemento => (
                //<Text>{elemento.descripcion}</Text>
                <Actividad
                    key={elemento.id}
                    actividad={elemento}
                    borrarActividad={borrarActividad}
                    completarActividad={completarActividad}
                />
            ))}

            
        </View>
    );
}