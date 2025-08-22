import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'
import type { FlexStyle } from 'react-native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type AlignContent = Exclude<FlexStyle['alignContent'], undefined>

type PreviewLayoutProps = PropsWithChildren<{
  label: string
  values: AlignContent[]
  selectedValue: AlignContent
  setSelectedValue: (value: AlignContent) => void
}>

const AlignContentLayout = () => {
  const [alignContent, setAlignContent] = useState<AlignContent>('flex-start')

  return (
    <PreviewLayout
      label='alignContent'
      selectedValue={alignContent}
      values={[
        'flex-start',
        'flex-end',
        'stretch',
        'center',
        'space-between',
        'space-around'
      ]}
      setSelectedValue={setAlignContent}
    >
      <View style={[styles.box, { backgroundColor: 'orangered' }]} />
      <View style={[styles.box, { backgroundColor: 'orange' }]} />
      <View style={[styles.box, { backgroundColor: 'mediumseagreen' }]} />
      <View style={[styles.box, { backgroundColor: 'deepskyblue' }]} />
      <View style={[styles.box, { backgroundColor: 'mediumturquoise' }]} />
      <View style={[styles.box, { backgroundColor: 'mediumslateblue' }]} />
      <View style={[styles.box, { backgroundColor: 'purple' }]} />
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
      <View style={[styles.container, { [label]: selectedValue }]}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 8,
    backgroundColor: 'aliceblue',
    maxHeight: 400
  },
  box: {
    width: 50,
    height: 80
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

export default AlignContentLayout
