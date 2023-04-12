import { View, Text } from "react-native";
import React from "react";
import ProgressBar from "react-native-progress/Bar";

const DailyGoal = () => {
  return (
    <View className="flex flex-col bg-[#3a3a3b] rounded-lg w-full space-y-3  p-6 ">
      <Text className="text-base text-slate-300">Daily writing goal</Text>
      <Text className="text-slate-300 text-sm">Word count</Text>
      <View className="items-center justify-center w-full">
        <ProgressBar color={"grey"} width={330} progress={0.3} />
      </View>
      <View></View>
    </View>
  );
};

export default DailyGoal;
