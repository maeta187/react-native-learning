import React from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * Viewはデフォルトで`flex`の性質を持っている
 * 但し、Web開発とは違い、デフォルドで`flexDirection: 'column'`なので常に縦並びになる
 * もし横並びにしたい場合は明示的に`flexDirection: 'row'`を書く必要がある
 */
const FlexBox = () => {
  return (
    <View style={[styles.container, { flexDirection: 'column' }]}>
      <View style={{ flex: 1, backgroundColor: 'red' }} />
      <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
      <View style={{ flex: 3, backgroundColor: 'green' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})

export default FlexBox
