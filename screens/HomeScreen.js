/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import data from "../data";

function HomeScreen(props) {
  const profileData = {
    name: "Uneku",
    points: 200,
  };
  const [profile, setProfile] = useState(profileData);

  const LineDivider = () => {
    return (
      <View
        style={{
          marginHorizontal: 3,
          width: 1,
          height: 50,
          backgroundColor: "#64676D",
        }}
      ></View>
    );
  };

  const renderBooks = ({ item, index }) => {};

  return (
    <SafeAreaView style={styles.container}>
      {/* header section */}
      <View style={{ height: 200 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* greeting */}
          <View>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
              Good Morning
            </Text>
            <Text style={{ fontSize: 16, color: "white" }}>{profile.name}</Text>
          </View>
          {/* points */}
          <View>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: "#F96D41",
                height: 40,
                width: 120,
                justifyContent: "center",
                padding: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="plus-circle"
                size={32}
                color="rgba(0,0,0,0.5)"
              />
              <Text>{profile.points} Points</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* buttonbar */}
      <View
        style={{
          borderRadius: 15,
          backgroundColor: "#25282F",
          flexDirection: "row",
          height: 70,
          marginHorizontal: 20,
          alignItems: "center",
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Image source={require("../assets/claim_icon.png")} />
          <Text style={{ fontSize: 14, color: "white", margin: 5 }}>Claim</Text>
        </TouchableOpacity>
        <LineDivider />
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", margin: 5 }}
        >
          <Image source={require("../assets/point_icon.png")} />
          <Text style={{ fontSize: 13, color: "white", margin: 5 }}>
            Get Points
          </Text>
        </TouchableOpacity>
        <LineDivider />
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", margin: 3 }}
        >
          <Image
            source={require("../assets/card_icon.png")}
            style={{ height: 40, width: 50 }}
          />
          <Text style={{ fontSize: 13, color: "white", margin: 2 }}>
            My Card
          </Text>
        </TouchableOpacity>
      </View>
      {/* body */}
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontWeight: "700", fontSize: 20, color: "white", margin: 2 }}
        >
          My Book
        </Text>
        <Text style={{ fontSize: 17, color: "grey", margin: 2 }}>See More</Text>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          data={data.myBooksData}
          renderItem={renderBooks}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1B26",
    flex: 1,
  },
});

export default HomeScreen;
