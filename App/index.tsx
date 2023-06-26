import React from 'react';
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';

import Row from './components/Row';
import Button from '../App/components/Button';
import calculator, {initialState} from '../App/utils/calculator';

export default class App extends React.Component {
  state = initialState;

  handleTap = (type: string, value: string | number | undefined) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap('clear', '$')}
              size={undefined}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap('posneg', '+')}
              size={undefined}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap('percentage', '%')}
              size={undefined}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.handleTap('operator', '/')}
              size={undefined}
            />
          </Row>

          <Row>
            <Button
              text="7"
              onPress={() => this.handleTap('number', 7)}
              size={undefined}
              theme={undefined}
            />
            <Button
              text="8"
              onPress={() => this.handleTap('number', 8)}
              size={undefined}
              theme={undefined}
            />
            <Button
              text="9"
              onPress={() => this.handleTap('number', 9)}
              size={undefined}
              theme={undefined}
            />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.handleTap('operator', '*')}
              size={undefined}
            />
          </Row>

          <Row>
            <Button
              text="4"
              onPress={() => this.handleTap('number', 4)}
              size={undefined}
              theme={undefined}
            />
            <Button
              text="5"
              onPress={() => this.handleTap('number', 5)}
              size={undefined}
              theme={undefined}
            />
            <Button
              text="6"
              onPress={() => this.handleTap('number', 6)}
              size={undefined}
              theme={undefined}
            />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap('operator', '-')}
              size={undefined}
            />
          </Row>

          <Row>
            <Button
              text="1"
              onPress={() => this.handleTap('number', 1)}
              size={undefined}
              theme={undefined}
            />
            <Button
              text="2"
              onPress={() => this.handleTap('number', 2)}
              size={undefined}
              theme={undefined}
            />
            <Button
              text="3"
              onPress={() => this.handleTap('number', 3)}
              size={undefined}
              theme={undefined}
            />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap('operator', '+')}
              size={undefined}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap('number', 0)}
              theme={undefined}
            />
            <Button
              text="."
              onPress={() => this.handleTap('number', '.')}
              size={undefined}
              theme={undefined}
            />
            <Button
              text="="
              theme="accent"
              onPress={() => this.handleTap('equal', '=')}
              size={undefined}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});
