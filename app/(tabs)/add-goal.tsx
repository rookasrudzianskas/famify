//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import {useRouter} from "expo-router";
import {EvilIcons, MaterialIcons} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import {supabase} from "@/supabase";
import EmojiSelector, { Categories } from "react-native-emoji-selector";

const OPTIONS = [
  {
    id: 0,
    icon: <EvilIcons name="image" size={24} color="gray" />
  },
  {
    id: 1,
    icon: <EvilIcons name="camera" size={24} color="gray" />
  },
  {
    id: 2,
    icon: <EvilIcons name="location" size={24} color="gray" />
  },
  {
    id: 3,
    icon: <EvilIcons name="spinner-2" size={24} color="gray" />
  }
];

const AddGoal = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [content, setContent] = useState<string>('');
  const [amount, setAmount] = useState<number>(100);
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);

  async function insertGoal() {
    try {
      const { data, error } = await supabase.from('goals').insert({
        name: title,
        amount: amount,
        groupId: 1,
        emoji: '🤑',
      });

      if (error) {
        console.error('Error inserting goal:', error.message);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error inserting goal:', error.message);
      return null;
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmit = async () => {
    const userId = 1;
    await insertGoal();
  };

  if(loading) return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );


  return (
    <View className="flex-1 m-2">
      <TouchableOpacity activeOpacity={0.8} onPress={() => router.push<any>(`/create-group`)} className="flex flex-row items-center bg-gray-800/70 rounded-lg max-w-[280px] m-5 ml-0 flex-row items-center p-2">
        <MaterialIcons name="group" size={36} color="white" className="flex items-center justify-center" style={styles.userImage} />
        <View>
          <Text className="font-[600] text-white mb-1">Create a group</Text>
          <Text className="text-[12px] text-gray-600">A Goal of Your Group</Text>
        </View>
      </TouchableOpacity>

      <View className="space-y-3">
        <TextInput
          placeholder="Name"
          style={{backgroundColor: '#171616', borderRadius: 4}}
          className="w-full h-12 px-5 mt-0 text-white border-[1px] border-gray-500 py-1"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          placeholder="1"
          style={{backgroundColor: '#171616', borderRadius: 4}}
          className="w-full h-12 px-5 mt-0 text-white border-[1px] border-gray-500 py-1 mb-16"
          keyboardType="numeric"
          selectTextOnFocus
          value={amount.toString()}
          onChangeText={() => setAmount(amount)}
        />

        <View className="h-40">
          <EmojiSelector
            category={Categories.all}
            onEmojiSelected={emoji => console.log(emoji)}
            showSearchBar={false}
          />
        </View>

      </View>

      <View className="m-5">
        {image && <Image source={{ uri: image }} className="w-full h-44 rounded-lg shadow-lg" />}
      </View>

      <View className="flex flex-row space-x-2 m-5">
        {OPTIONS.map((option) => (
          <TouchableOpacity onPress={option.id === 0 ? () => pickImage() : () => {}} key={option.id} activeOpacity={0.8} className="flex bg-gray-900/50 w-10 h-10 items-center justify-center rounded-full">
            {option.icon}
          </TouchableOpacity>
        ))}
      </View>

      <View className="border-t border-gray-800/60 flex flex-row justify-between">
        <View/>
        <View className="flex flex-row items-center justify-center">
          <View className="px-2 py-1 bg-red-200 rounded-md w-12 flex items-center mr-1 justify-center">
            <Text className="text-xs text-red-600 font-semibold">NEW</Text>
          </View>
          <EvilIcons name="clock" size={24} color="black" />
          <TouchableOpacity
            onPress={() => onSubmit()}
            activeOpacity={0.8} className="flex bg-blue-500 w-28 h-7 items-center justify-center rounded-full m-5">
            <Text className="text-white">{false ? 'Posting' : 'Add Your Goal'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddGoal;

const styles = StyleSheet.create({
  userImage: {
    width: 50,

  },
  input: {
    margin: 10,
    height: 100,
    textAlignVertical: 'top',
  }
});
