//@ts-nocheck
import React from 'react';
import {Text, View, TouchableOpacity, Switch, ScrollView} from 'react-native';
import {
    AntDesign,
    Feather,
    FontAwesome5, Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Entypo,
    SimpleLineIcons
} from "@expo/vector-icons";
import * as WebBrowser from 'expo-web-browser';

const Settings = () => {
    return (
      <View className="mx-4">
          <View className="flex-row justify-between mt-12">
              <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                  <Ionicons name="chevron-back-outline" size={24} color="white" />
              </TouchableOpacity>
              <Text className="text-white text-[17px] font-[600]">Settings</Text>
              <View/>
          </View>

          <ScrollView contentContainerStyle={{paddingBottom: 150}} showsVerticalScrollIndicator={false}>
              <View className="mt-7">
                  <TouchableOpacity
                    className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3 rounded-[15px]" activeOpacity={0.7}>
                      <View className="flex-row items-center">
                          <View className="relative flex-row">
                              <View className="w-7 h-7 bg-blue-300 rounded-md"></View>
                              <View className="absolute w-7 h-5 mt-[8px] rounded-t-md bg-blue-500 rounded-b-md"></View>
                          </View>
                          <Text className="text-[15px] text-gray-200 font-[600] ml-3">Wallets</Text>
                      </View>
                      <View className="flex-row items-center">
                          {true ? (
                            <Text className="text-gray-400 text-sm font-[600]">Not connected</Text>
                          ) : (
                            <Text className="text-[17px] text-gray-200 font-[600] mr-2">Something</Text>
                          )}
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </View>
                  </TouchableOpacity>

                  <View className="mt-5">
                      <TouchableOpacity
                        onPress={() => {}}
                        className="flex-row items-center justify-between rounded-[15px] bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-gray-500 rounded-md items-center justify-center">
                                      <SimpleLineIcons name="social-dropbox" size={18} color="#bfbfbf" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Networks</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>
                  </View>

                  <View className="mt-5">
                      <TouchableOpacity className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3 rounded-[15px]" activeOpacity={1}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-gray-600 rounded-md items-center justify-center">
                                      <Feather name="sun" size={18} color="#ff9900" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Dark Mode</Text>
                          </View>
                          <Switch
                            trackColor={{ false: '#767577', true: '#619afa' }}
                            thumbColor={true ? '#ffffff' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {}}
                            value={true}
                          />
                      </TouchableOpacity>
                  </View>

                  <View className="mt-5">
                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.twitter.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3 rounded-t-[15px]" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-500 rounded-md items-center justify-center">
                                      <FontAwesome5 name="ussunnah" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Support</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.discord.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-700 rounded-md items-center justify-center">
                                      <MaterialCommunityIcons name="discord" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Discord</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.telegram.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-400 rounded-md items-center justify-center">
                                      <FontAwesome5 name="telegram-plane" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Telegram Channel</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.telegram.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-400 rounded-md items-center justify-center">
                                      <FontAwesome5 name="telegram-plane" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Telegram Chat</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.medium.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-gray-600 rounded-md items-center justify-center">
                                      <AntDesign name="medium-monogram" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Medium</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.twitter.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-500 rounded-md items-center justify-center">
                                      <AntDesign name="twitter" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Twitter</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.facebook.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3 rounded-b-[15px]" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-700 rounded-md items-center justify-center">
                                      <Entypo name="facebook" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Facebook</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>
                  </View>

                  <View className="mt-5">
                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.test.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3 rounded-t-[15px]" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-600 rounded-md items-center justify-center">
                                      <AntDesign name="heart" size={18} color="red" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Rate and Review App</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.test.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-700 rounded-md items-center justify-center">
                                      <MaterialIcons name="message" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Leave a Feedback</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.test.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-700 rounded-md items-center justify-center">
                                      <MaterialIcons name="message" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Suggest a Feature</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => WebBrowser.openBrowserAsync('https://www.test.com/')}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3 rounded-b-[15px]" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-500 rounded-md items-center justify-center">
                                      <MaterialIcons name="groups" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Recommend to a Friend</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>
                  </View>

                  <View className="mt-5">
                      <TouchableOpacity
                        onPress={() => {}}
                        className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3 rounded-[15px]" activeOpacity={0.7}>
                          <View className="flex-row items-center">
                              <View className="relative flex-row">
                                  <View className="w-7 h-7 bg-blue-500 rounded-md items-center justify-center">
                                      <Foundation name="info" size={18} color="white" />
                                  </View>
                              </View>
                              <Text className="text-[15px] text-gray-200 font-[600] ml-3">Legal docs</Text>
                          </View>
                          <Ionicons name="chevron-forward" size={18} color="gray" />
                      </TouchableOpacity>
                  </View>
              </View>

              <View className="flex items-center justify-center mt-10">
                  <Text className="text-gray-500 text-[17px] font-[500]">1.0.0 (00)</Text>
              </View>
          </ScrollView>
      </View>
    );
};

export default Settings;
