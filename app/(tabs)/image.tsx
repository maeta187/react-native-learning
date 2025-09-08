import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

/**
 * Webではサイズを指定しなかった場合0x0で表示され、画像取得後にサイズに合わせてレンダリングされる
 * これはUXを著しく低下させる
 * React Nativeではこの動作を意図的に実装していない
 * そのため静的画像以外の参照ではサイズを指定する必要がある
 */
const ImageItem = () => {
  return (
    <View style={styles.container}>
      {/* 静的画像の参照 */}
      {/* <Image source={require('@/assets/images/dummy.jpg')} /> */}

      {/* URLで参照 */}
      {/* <Image
        source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
        style={{ width: 100, height: 100 }}
      /> */}

      {/* キャッシュ */}
      {/* <Image
        source={{
          uri: 'https://picsum.photos/seed/picsum/200/300',
          cache: 'force-cache'
        }}
        style={{ width: 100, height: 100 }}
      /> */}

      {/* 背景画像 */}
      <ImageBackground
        source={require('@/assets/images/dummy.jpg')}
        style={[styles.container, { width: '100%', height: '100%' }]}
      >
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
})

export default ImageItem
