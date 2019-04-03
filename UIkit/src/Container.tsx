import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { white } from '../common/colors';


type ContainerProps = {
  style: ViewStyle,
  children: React.ReactNode
}

class Container extends React.PureComponent<ContainerProps, any> {
  public render() {
    const { style, children } = this.props
    return (
      <View
        {...this.props}
        style={StyleSheet.flatten([styles.base, style])}>
        {children}
      </View>
    );
  }
}

type Style = {
  base: ViewStyle
}

const styles = StyleSheet.create<Style>({
  base: {
    flex: 1,
    backgroundColor: white,
    marginBottom: isIphoneX() ? 35 : 0
  }
})

export default Container