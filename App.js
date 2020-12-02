import React, {Component} from 'react';
import {View, Text, StyleSheet, NativeModules, Button} from 'react-native';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    };
  }

  onSum = () => {
    NativeModules.MyModule.addWithCallback(5, 10, (sum) => {
      this.setState({sum: sum});
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.sum}</Text>
        <Button title="SUM" onPress={this.onSum} />
      </View>
    );
  }
}
export default componentName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
