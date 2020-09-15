import React, { Component } from "react";

import { View, Text, AppRegistry, Pano, asset, StyleSheet } from "react-vr";

const styles = StyleSheet.create({
  menuButton: {
    backgroundColor: "#fff",
    borderRadius: 0.25,
    width: 0.3,
    height: 0.3,
    transform: [{ translate: [-2.9, 1.6, -3] }],
    alignItems: "center",
    justifyContent: "center",
    fontSize: 0.08,
  },
  menuButtonText: {
    color: "cyan",
    textAlign: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    width: 1,
    transform: [{ translate: [-3, 1.5, -3] }],
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

const places = [
  {
    title: "Island Paradise",
    img: "island-garden.jpg",
  },
  {
    title: "Starry Night",
    img: "starry-sky.jpg",
  },
  {
    title: "Winter Outdoors",
    img: "winter-outdoor.jpg",
  },
  {
    title: "Light Snow",
    img: "light-show.jpg",
  },
];

class WorldTour extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      place: "starry-sky.jpg",
    };
  }
  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuButton}>
          <Text onEnter={() => this.toggleMenu()} style={styles.menuButtonText}>
            {this.state.showMenu ? "Open " : "Close "} Menu
          </Text>
        </View>
        {this.state.showMenu ? (
          <View>
            {places.map((place) => (
              <View
                key={place.title}
                onEnter={() => this.setState({ place: place.img })}
              >
                <Text style={styles.menuButtonText}>{place.title}</Text>
              </View>
            ))}
          </View>
        ) : (
          <View></View>
        )}
        <Pano source={asset(this.state.place)} />
      </View>
    );
  }
}

AppRegistry.registerComponent("world_tour", () => WorldTour);
