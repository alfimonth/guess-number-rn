import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type PrimaryButtonProps ={
    children : ReactNode
}

const PrimaryButton = ({children}: PrimaryButtonProps) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({})