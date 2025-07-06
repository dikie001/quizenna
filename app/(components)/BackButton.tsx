import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const BackButton = () => {
  return (
    <View>
     <TouchableOpacity onPress={()=>router.back()} className='flex flex-row items-center w-8 h-8 justify-center active:bg-black/20 rounded-full '>
       
        <Ionicons name='chevron-back' size={24} className='text-primary-light'/>
     </TouchableOpacity>
    </View>
  )
}

export default BackButton