import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type Project = {
  title: string;
  date: string;
  status: string;
};

export default function ProjectList() {
  const route = useRoute<RouteProp<{ params: { newProject?: Project } }, 'params'>>();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (route.params && route.params.newProject) {
      const newProject = route.params.newProject;
      if (newProject) {
        setProjects((prevProjects) => [...prevProjects, newProject]);
      }
    }
  }, [route.params]);



  const markAsFinished = (index: number) => {
    setProjects((prevProjects) =>
      prevProjects.map((project, i) =>
        i === index ? { ...project, status: 'Finished' } : project
      )
    );
  };

  const deleteProject = (index: number) => {
    setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
  };

  const renderItem = ({ item, index }: { item: Project; index: number }) => (
    <View style={styles.projectItem}>
      <Text style={styles.projectTitle}>{item.title}</Text>
      <Text style={styles.projectDate}>Due: {item.date}</Text>
      <Text style={styles.projectStatus}>Status: {item.status}</Text>
      <View style={styles.buttons}>
        <Button
          title="Mark as Finished"
          color="#61dafb"
          onPress={() => markAsFinished(index)}
          disabled={item.status === 'Finished'}
        />
        <Button title="Delete" color="#d9534f" onPress={() => deleteProject(index)} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={projects}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      ListEmptyComponent={<Text style={styles.noProjects}>No projects added yet.</Text>}
      contentContainerStyle={{ padding: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  projectItem: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#282C35',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  projectTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  projectDate: { fontSize: 14, color: '#61dafb', marginTop: 5 },
  projectStatus: { fontSize: 16, color: '#ccc', marginVertical: 5 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  noProjects: { textAlign: 'center', marginTop: 20, fontSize: 16, color: 'gray' },
});
