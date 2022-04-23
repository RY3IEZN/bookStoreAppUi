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
  ScrollView,
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

  const renderBooks = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => console.log(item)}
        style={{ marginHorizontal: 15 }}
      >
        <Image
          resizeMode="cover"
          source={item.bookCover}
          style={{ borderRadius: 15, height: 350, width: 220 }}
        />
        <View
          style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Image
            style={{ height: 20, width: 20, tintColor: "grey" }}
            source={require("../assets/clock_icon.png")}
          />
          <Text style={{ fontSize: 13, color: "grey", margin: 2 }}>
            {item.lastRead}
          </Text>
          <Image
            style={{
              height: 20,
              width: 20,
              tintColor: "grey",
              marginHorizontal: 10,
            }}
            source={require("../assets/page_icon.png")}
          />
          <Text style={{ fontSize: 13, color: "grey" }}>{item.completion}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderBooksCategory = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => console.log(item)}
        style={{
          marginHorizontal: 20,
          marginVertical: 15,
          backgroundColor: "#25282F",
          borderRadius: 20,
          padding: 10,
          flexDirection: "row",
        }}
      >
        <View style={{ marginRight: 5 }}>
          <Image
            resizeMode="cover"
            source={item.bookCover}
            style={{ borderRadius: 15, height: 150, width: 100 }}
          />
        </View>
        <View style={{ marginLeft: 5 }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 17,
              color: "white",
            }}
          >
            {item.bookName}
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 15,
              color: "grey",
            }}
          >
            {item.author}
          </Text>
          <View
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Image
              style={{ height: 20, width: 20, tintColor: "grey" }}
              source={require("../assets/page_filled_icon.png")}
            />
            <Text style={{ fontSize: 13, color: "grey", margin: 2 }}>
              {item.pageNo}
            </Text>
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: "grey",
                marginHorizontal: 10,
              }}
              source={require("../assets/read_icon.png")}
            />
            <Text style={{ fontSize: 13, color: "grey" }}>{item.readed}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            {item.genre.includes("Adventure") && (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 8,
                  marginRight: 8,
                  backgroundColor: "#213432",
                  height: 40,
                  borderRadius: 12,
                }}
              >
                <Text style={{ fontSize: 15, color: "lightgreen" }}>
                  Adventure
                </Text>
              </View>
            )}
            {item.genre.includes("Drama") && (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 8,
                  marginRight: 8,
                  backgroundColor: "#22273B",
                  height: 40,
                  borderRadius: 12,
                }}
              >
                <Text style={{ fontSize: 15, color: "#424BAF" }}>Drama</Text>
              </View>
            )}

            {item.genre.includes("Romance") && (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#31262F",
                  height: 40,
                  borderRadius: 12,
                }}
              >
                <Text style={{ fontSize: 15, color: "#C5505E" }}>Romance</Text>
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={{ position: "absolute", top: 5, right: 15, paddingTop: 10 }}
          onPress={() => console.log("Bookmark")}
        >
          <Image
            source={require("../assets/bookmark_icon.png")}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: "grey",
            }}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const renderCategories = ({ item, index }) => {
    return (
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{ fontWeight: "700", fontSize: 17, color: "grey", margin: 2 }}
        >
          {item.categoryName}
        </Text>
      </View>
    );
  };

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
      <ScrollView>
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
            style={{
              fontWeight: "700",
              fontSize: 20,
              color: "white",
              margin: 2,
            }}
          >
            My Book
          </Text>
          <Text style={{ fontSize: 17, color: "grey", margin: 2 }}>
            See More
          </Text>
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

        {/* category section */}
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            data={data.categoriesData}
            renderItem={renderCategories}
          />
        </View>
        <View>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={data.myBooksData}
            renderItem={renderBooksCategory}
          />
        </View>
      </ScrollView>
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
