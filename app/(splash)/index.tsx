import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";

interface SplashCardProps {
  image: any;
  header: string;
  description: string;
  width: number;
  onShoppingPress: () => void;
}

const SplashCard: React.FC<SplashCardProps> = ({
  image,
  header,
  description,
  width,
  onShoppingPress,
}) => (
  <View style={[styles.card, { width }]}>
    <Image source={image} style={styles.image} />
    <View style={styles.contentOverlay}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.shoppingButton} onPress={onShoppingPress}>
        <Text style={styles.buttonText}>Shopping Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SplashScreen = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const { width, height } = Dimensions.get("window");

  const handleShoppingPress = () => {
    router.push("/(auth)/Login");
  };

  const slides = [
    {
      image: require("../../assets/fluxImages/Frame\ 33089.png"),
      header: "Discover something new",
      description: "Special new arrivals just for you",
    },
    {
      image: require("../../assets/fluxImages/Group\ 33078.png"),
      header: "Update trendy outfit",
      description: "Favourite brands and hottest trends",
    },
    {
      image: require("../../assets/fluxImages/Frame\ 33091.png"),
      header: "Explore your true style",
      description: "Relax and let us bring the style to you",
    },
  ];

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentPage(currentIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {slides.map((slide, index) => (
          <SplashCard
            key={index}
            image={slide.image}
            header={slide.header}
            description={slide.description}
            width={width}
            onShoppingPress={handleShoppingPress}
          />
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  currentPage === index ? "#fff" : "rgba(255, 255, 255, 0.5)",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "60%",
    height: "40%",
    resizeMode: "contain",
    position: "absolute",
  },
  contentOverlay: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: vs(40),
    zIndex: 10,
    width: "100%",
  },
  textContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: s(22),
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    paddingHorizontal: s(20),
  },
  description: {
    fontSize: s(14),
    color: "#666",
    textAlign: "center",
    paddingHorizontal: s(20),
    marginTop: vs(8),
  },
  shoppingButton: {
    backgroundColor: "rgba(120, 120, 120, 0.7)",
    paddingVertical: vs(12),
    paddingHorizontal: s(30),
    borderRadius: s(25),
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontSize: s(16),
    fontWeight: "bold",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: vs(40),
    gap: s(8),
    backgroundColor: "#f5f5f5",
  },
  dot: {
    width: s(8),
    height: s(8),
    borderRadius: s(4),
    color: "#464447",
  },
});
