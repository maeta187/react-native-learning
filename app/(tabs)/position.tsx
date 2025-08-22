import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Position = 'relative' | 'absolute' | 'static'

type PreviewLayoutProps = PropsWithChildren<{
  label: string
  values: Position[]
  selectedValue: Position
  setSelectedValue: (value: Position) => void
}>

const PositionLayout = () => {
  const [position, setPosition] = useState<Position>('relative')

  return (
    <PreviewLayout
      label='position'
      selectedValue={position}
      values={['relative', 'absolute', 'static']}
      setSelectedValue={setPosition}
    >
      <View
        style={[
          styles.box,
          { top: 25, left: 25, position, backgroundColor: 'powderblue' }
        ]}
      />
      <View
        style={[
          styles.box,
          { top: 50, left: 50, position, backgroundColor: 'skyblue' }
        ]}
      />
      <View
        style={[
          styles.box,
          { top: 75, left: 75, position, backgroundColor: 'steelblue' }
        ]}
      />
    </PreviewLayout>
  )
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue
}: PreviewLayoutProps) => {
  return (
    <View style={{ padding: 50, flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[styles.button, selectedValue === value && styles.selected]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    minHeight: 200
  },
  box: {
    width: 50,
    height: 50
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center'
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral'
  },
  selectedLabel: {
    color: 'white'
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24
  }
})

export default PositionLayout
