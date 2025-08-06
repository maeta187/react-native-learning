import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Style = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  )
}

/**
 * スタイルを作成する時はStyleSheet.createを使用する
 * CSSのプロパティ名はキャメルケースで記述する
 * コンポーネント側で`style={[styles.bigBlue, styles.red]}`のように記述するとプロパティがmergeされ、重複したプロパティは上書きされる(後に記述した方が優先される)
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})

export default Style
