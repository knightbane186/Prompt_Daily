import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import StoryStarter from "../components/StoryStarter";
import PoemStarter from "../components/PoemStarter";
import DailyGoal from "../components/DailyGoal";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 items-center justify-center min-h-screen bg-black  ">
      {/* Fire & Crown */}
      <View className="flex-row pt-12 justify-between w-full px-2">
        <Pressable className="ml-2">
          <MaterialIcons
            name="local-fire-department"
            size={24}
            color="yellow"
          />
        </Pressable>
        <Pressable className="mr-2">
          <FontAwesome5 name="crown" size={22} color="orange" />
        </Pressable>
      </View>

      <ScrollView className="mt-8 space-y-6">
        {/* Daily writing goal container */}
        <View>
          <DailyGoal />
        </View>

        {/* Prompt Section */}
        <View>
          <StoryStarter />
        </View>

        {/* Prompt of the day */}

        <View>
          <PoemStarter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
