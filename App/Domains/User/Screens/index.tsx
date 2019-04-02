import * as React from 'react';
import { StyleSheet, Text, Button, TextStyle, ViewStyle } from 'react-native';
import { connect } from 'react-redux';
import { iRootState, Dispatch } from 'Setup/Store';
import { View } from '@curly-ui';

interface CounterScreenProps {
  counter: number;
}

interface Styles {
  counterText: TextStyle;
  container: ViewStyle;
  rowSpaceBetween: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  counterText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  rowSpaceBetween: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

const mapState = (state: iRootState) => ({
  counter: state.counterModel.counter,
});

const mapDispatch = (dispatch: Dispatch) => ({
  counterFunc: dispatch.counterModel,
});

interface CounterScreenProps {
  counter: number;
  counterFunc: any;
}

class CounterScreen extends React.Component<CounterScreenProps, any> {
  public render() {
    const { counter, counterFunc } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>The count is {counter}</Text>
        <View style={styles.rowSpaceBetween}>
          <Button onPress={counterFunc.increment} title="increment" />
          <Button onPress={counterFunc.decrement} title="decrement" />
        </View>
        <View style={styles.rowSpaceBetween}>
          <Button onPress={counterFunc.incrementAsync} title="incrementAsync" />
          <Button onPress={counterFunc.decrementAsync} title="decrementAsync" />
        </View>
      </View>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(CounterScreen);
