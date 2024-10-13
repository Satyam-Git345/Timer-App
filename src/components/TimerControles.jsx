import React from 'react';
import { View, Button } from 'react-native';

const TimerControls = ({ startTimer, pauseTimer, resetTimer }) => (
  <View>
    <Button title="Start" onPress={startTimer} />
    <Button title="Pause" onPress={pauseTimer} />
    <Button title="Reset" onPress={resetTimer} />
  </View>
);

export default TimerControls;
