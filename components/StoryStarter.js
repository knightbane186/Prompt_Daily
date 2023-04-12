import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const StoryStarter = () => {
  return (
    <View className="group">
      <View className="flex-row justify-between bg-[#2c2c2d] p-6 mb-[-11] pt-3 rounded-t-lg  ">
        <Text className=" pt-2 text-xs text-white">PERSONALISED PROMPT</Text>
        <FontAwesome5 name="sliders-h" size={22} color="white" />
      </View>
      <View
        className="flex flex-col box bg-[#1c1c1e] rounded-lg w-[387]

    items-left  p-2 justify-center space-x-8 relative"
      >
        <View className="absolute top-0  space-y-3 text-left mt-2">
          <Text className=" ml-3 px-3 py-1 text-sm text-white bg-[#1581ff] rounded-lg">
            STORY STARTER
          </Text>
        </View>
        <Text className="text-white block mt-10 right-7 ml-3">
          I grab my sister's hand and pull her towards the cliff edge with me.
          She nods slowly in my direction. Then we jump.
        </Text>
        <Text className="font-style: italic text-slate-500 right-7 m-4">
          Write the story leading up to, or going forward from, here.
        </Text>

        {/* Button group */}
        <View className="space-y-3 items-center justify-center m-4">
          {/* Read button */}
          <Pressable className="w-full bg-[#3a3a3b] rounded-lg py-3 px-4 items-center mr-5">
            <Text className="text-white">Read</Text>
          </Pressable>
          <Pressable className="w-full bg-[#b21bbf] rounded-lg py-3 px-4 items-center mr-5">
            <Text className="text-white">Start writing</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default StoryStarter;
