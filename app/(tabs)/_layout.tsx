import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute'
          },
          default: {}
        })
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='house.fill' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='paperplane.fill' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='style'
        options={{
          title: 'Style',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='0.circle' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='height-width'
        options={{
          title: 'HeightWidth',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='1.circle' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='flexbox'
        options={{
          title: 'FlexBox',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='2.circle' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='flex-direction'
        options={{
          title: 'FlexDirection',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='3.circle' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='direction'
        options={{
          title: 'Direction',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='3.circle' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='justify-content'
        options={{
          title: 'justifyContent',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='4.circle' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='align-items'
        options={{
          title: 'alignItems',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='5.circle' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='align-self'
        options={{
          title: 'alignSelf',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='6.circle' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='align-content'
        options={{
          title: 'alignContent',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='7.circle' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='flex-basis-grow-shrink'
        options={{
          title: 'flexBasisGrowShrink',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='7.circle' color={color} />
          )
        }}
      />
    </Tabs>
  )
}
