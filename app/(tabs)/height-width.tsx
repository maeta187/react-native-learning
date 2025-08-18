import React from 'react'
import { View } from 'react-native'

/**
 * widthとheightは単位を指定しない場合はpxで出力される
 * backgroundColorは名称を指定するとrgbで出力される
 */
const HeightWidth = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <View
        style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
      ></View>
      <View
        style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}
      ></View>
      <View
        style={{ width: 150, height: 150, backgroundColor: 'steelblue' }}
      ></View> */}
      {/* <FlexDimensionsBasics /> */}
      <PercentageDimensionsBasics />
    </View>
  )
}

/**
 * コンポーネントは親要素の寸法が0より大きい場合のみ利用可能なスペースを埋めるように拡張できます。
 * 親要素が固定値で幅と高さを設定していないまたは、flexプロパティを設定していない場合は親要素の寸法は0となり,flexの子要素は表示されない
 */
const FlexDimensionsBasics = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
      <View style={{ flex: 2, backgroundColor: 'skyblue' }}></View>
      <View style={{ flex: 3, backgroundColor: 'steelblue' }}></View>
    </View>
  )
}

/**
 * `%`なども使用可能
 */
const PercentageDimensionsBasics = () => {
  return (
    <View style={{ height: '100%' }}>
      <View
        style={{
          height: '15%',
          backgroundColor: 'powderblue'
        }}
      />
      <View
        style={{
          width: '66%',
          height: '35%',
          backgroundColor: 'skyblue'
        }}
      />
      <View
        style={{
          width: '33%',
          height: '50%',
          backgroundColor: 'steelblue'
        }}
      />
    </View>
  )
}

export default HeightWidth
