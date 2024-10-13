import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Timer from '../components/Timer';

const TimerScreen = () => {
  const [timers, setTimers] = useState([]);

  const addTimer = () => {
    if (timers.length < 5) {
      setTimers([...timers, 60]); //to start a timer 60 seconds
    }
  };

  const handleTimerComplete = () => {
    console.log('Timer Finished', 'Your timer has reached zero!');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Timer App</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {timers.map((time, index) => (
          <Timer key={index} initialTime={time} onComplete={handleTimerComplete} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={addTimer}>
        <Text style={styles.addButtonText}>Add Timer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', // Light background
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default TimerScreen;
