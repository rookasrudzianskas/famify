//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
// import DUMMY_USER from '../../../assets/data/user.json';
// import {User} from "@/types";
import {useRouter} from "expo-router";
import {EvilIcons} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import db from "@/supabase";
import {useMutation} from "react-query";
// import {useUserContext} from "@/context/UserContext";

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
  // const [user, setUser] = useState(DUMMY_USER);
  const router = useRouter();
  // const { dbUser } = useUserContext();
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);

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

  const onSubmit = async (data) => {
    const userId = 1;
    try {
      const mutation = useMutation({
        async mutation (data) {
          await db.from('goals').insert({
            name: data.name,
            about: data.about,
            emoji: '🚀',
            groupId: 1,
            targetDate: '12-12-2024'
          }).eq('id', userId)
        },
        async onSuccess () {
          // Invalidate and refetch
          await queryClient.invalidateQueries('goals')
        }
      })

      router.push('/(tabs)/');
      setContent('');
      setImage(null);
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <View className="flex-1">
      <TouchableOpacity activeOpacity={0.8} onPress={() => router.push<any>(`/`)} className="flex bg-gray-800/70 rounded-lg max-w-[280px] m-5 ml-0 flex-row items-center p-2">
        <Image source={{ uri: "https://picsum.photos/500/300?random=3" }} style={styles.userImage} />
        <View>
          <Text className="font-[600] text-white mb-1">Rokas</Text>
          <Text className="text-[12px] text-gray-600">Post to Anyone</Text>
        </View>
      </TouchableOpacity>

      <View className="space-y-3">
        <TextInput
          placeholder="Name"
          className="h-10 px-5 mt-0 text-white border border-gray-800/70 py-1 rounded-md border-2"
          // multiline
          // value={content}
          // onChangeText={setContent}
        />

        <TextInput
          placeholder="1"
          className="h-10 px-5 mt-0 text-white border border-gray-800/70 py-1 rounded-md border-2"
          keyboardType="numeric"
          selectTextOnFocus
          value={"1"}
        />

        <View className="border border-gray-800/70 py-1 rounded-md border-2">
          <TextInput
            placeholder="What do you want to talk about?"
            className="h-[150px] m-5 mt-0 text-white"
            multiline
            value={content}
            onChangeText={setContent}
            numberOfLines={3}
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
            activeOpacity={0.8} className="flex bg-blue-500 w-20 h-7 items-center justify-center rounded-full m-5">
            <Text className="text-white">{false ? 'Posting' : 'Add Goal'}</Text>
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
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  input: {
    margin: 10,
    height: 100,
    textAlignVertical: 'top',
  }
});
