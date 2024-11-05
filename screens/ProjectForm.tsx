import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ProjectFormProps = NativeStackScreenProps<any>;

export default function ProjectForm({ navigation }: ProjectFormProps) {
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const addProject = () => {
    if (title && date) {
      navigation.navigate('Projects', { newProject: { title, date, status: 'Ongoing' } });
      setTitle('');
      setDate('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a New Project</Text>
      <TextInput
        style={styles.input}
        placeholder="Project Title"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Completion Date"
        placeholderTextColor="#888"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Add Project" color="#61dafb" onPress={addProject} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1e24', padding: 20, justifyContent: 'center' },
  heading: { fontSize: 24, color: '#61dafb', textAlign: 'center', marginBottom: 20 },
  input: {
    borderColor: '#444',
    borderWidth: 1,
    marginBottom: 15,
    padding: 12,
    borderRadius: 8,
    color: '#fff',
    backgroundColor: '#333',
  },
});
