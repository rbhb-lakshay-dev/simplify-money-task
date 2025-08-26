// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from "react-native";
// import { useQuery } from "@tanstack/react-query";
// import { useRouter } from "expo-router";
// import { getMetalPrice } from "../src/services/api";

// export default function Home() {
//   const router = useRouter();

//   const { data: gold, isLoading: goldLoading } = useQuery({
//     queryKey: ["gold"],
//     queryFn: () => getMetalPrice("XAU/INR"),
//   });

//   const { data: platinum, isLoading: platLoading } = useQuery({
//     queryKey: ["platinum"],
//     queryFn: () => getMetalPrice("XPT/INR"),
//   });

//   const goToDetails = (metal, data) => {
//     if (!data) return;
//     router.push(
//       `/details?metal=${metal}&data=${encodeURIComponent(JSON.stringify(data))}`
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Metal Prices</Text>

//       {/* Gold Tile */}
//       <TouchableOpacity
//         style={styles.tile}
//         onPress={() => goToDetails("Gold", gold)}
//       >
//         <Text style={styles.metal}>Gold (24K)</Text>
//         {goldLoading ? (
//           <ActivityIndicator />
//         ) : gold ? (
//           <>
//             <Text>{gold.price} INR</Text>
//             <Text>{gold.timestamp}</Text>
//           </>
//         ) : (
//           <Text style={{ color: "red" }}>Error fetching Gold</Text>
//         )}
//       </TouchableOpacity>

//       {/* Platinum Tile */}
//       <TouchableOpacity
//         style={styles.tile}
//         onPress={() => goToDetails("Platinum", platinum)}
//       >
//         <Text style={styles.metal}>Platinum</Text>
//         {platLoading ? (
//           <ActivityIndicator />
//         ) : platinum ? (
//           <>
//             <Text>{platinum.price} INR</Text>
//             <Text>{platinum.timestamp}</Text>
//           </>
//         ) : (
//           <Text style={{ color: "red" }}>Error fetching Platinum</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: "#fff" },
//   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
//   tile: {
//     padding: 20,
//     backgroundColor: "#ffffffff",
//     marginBottom: 15,
//     borderRadius: 10,
//   },
//   metal: { fontSize: 18, fontWeight: "600", marginBottom: 5 },
// });
// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from "react-native";
// import { useQuery } from "@tanstack/react-query";
// import { useRouter } from "expo-router";
// import { getMetalPrice } from "../src/services/api";

// export default function Home() {
//   const router = useRouter();

//   const { data: gold, isLoading: goldLoading } = useQuery({
//     queryKey: ["gold"],
//     queryFn: () => getMetalPrice("XAU/INR"),
//   });

//   const { data: platinum, isLoading: platLoading } = useQuery({
//     queryKey: ["platinum"],
//     queryFn: () => getMetalPrice("XPT/INR"),
//   });

//   const goToDetails = (metal, data) => {
//     if (!data) return;
//     router.push(
//       `/details?metal=${metal}&data=${encodeURIComponent(JSON.stringify(data))}`
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Metal Prices</Text>

//       {/* Gold Tile */}
//       <TouchableOpacity
//         style={[styles.tile, { backgroundColor: "#FFD700" }]} // Gold color
//         onPress={() => goToDetails("Gold", gold)}
//       >
//         <Text style={styles.metal}>Gold (24K)</Text>
//         {goldLoading ? (
//           <ActivityIndicator color="#000" />
//         ) : gold ? (
//           <>
//             <Text style={styles.price}>{gold.price} INR</Text>
//             <Text style={styles.timestamp}>{gold.timestamp}</Text>
//           </>
//         ) : (
//           <Text style={styles.errorText}>Error fetching Gold</Text>
//         )}
//       </TouchableOpacity>

//       {/* Platinum Tile */}
//       <TouchableOpacity
//         style={[styles.tile, { backgroundColor: "#E5E4E2" }]} // Platinum color
//         onPress={() => goToDetails("Platinum", platinum)}
//       >
//         <Text style={styles.metal}>Platinum</Text>
//         {platLoading ? (
//           <ActivityIndicator color="#000" />
//         ) : platinum ? (
//           <>
//             <Text style={styles.price}>{platinum.price} INR</Text>
//             <Text style={styles.timestamp}>{platinum.timestamp}</Text>
//           </>
//         ) : (
//           <Text style={styles.errorText}>Error fetching Platinum</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#F5F5F5", // page background
//   },
//   heading: {
//     fontSize: 26,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#333",
//   },
//   tile: {
//     padding: 20,
//     marginBottom: 15,
//     borderRadius: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 6, // for android shadow
//   },
//   metal: {
//     fontSize: 20,
//     fontWeight: "700",
//     marginBottom: 8,
//     color: "#333",
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#000",
//   },
//   timestamp: {
//     fontSize: 14,
//     color: "#555",
//     marginTop: 4,
//   },
//   errorText: {
//     color: "red",
//     fontWeight: "600",
//   },
// });
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { getMetalPrice } from "../src/services/api";

export default function Home() {
  const router = useRouter();

  const {
    data: gold,
    isLoading: goldLoading,
    refetch: refetchGold,
  } = useQuery({
    queryKey: ["gold"],
    queryFn: () => getMetalPrice("XAU/INR"),
  });

  const {
    data: platinum,
    isLoading: platLoading,
    refetch: refetchPlat,
  } = useQuery({
    queryKey: ["platinum"],
    queryFn: () => getMetalPrice("XPT/INR"),
  });

  const goToDetails = (metal, data) => {
    if (!data) return;
    router.push(
      `/details?metal=${metal}&data=${encodeURIComponent(JSON.stringify(data))}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Metal Prices</Text>

      {/* Gold Tile */}
      <TouchableOpacity
        style={[styles.tile, styles.goldTile]}
        onPress={() => goToDetails("Gold", gold)}
      >
        <Text style={styles.metal}>Gold (24K)</Text>
        {goldLoading ? (
          <ActivityIndicator color="#fff" />
        ) : gold ? (
          <>
            <Text style={styles.price}>{gold.price} INR</Text>
            <Text style={styles.timestamp}>{gold.timestamp}</Text>
          </>
        ) : (
          <Text style={styles.error}>Error fetching Gold</Text>
        )}
        <TouchableOpacity style={styles.tileButton} onPress={refetchGold}>
          <Text style={styles.tileButtonText}>Refresh</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Platinum Tile */}
      <TouchableOpacity
        style={[styles.tile, styles.platTile]}
        onPress={() => goToDetails("Platinum", platinum)}
      >
        <Text style={styles.metal}>Platinum</Text>
        {platLoading ? (
          <ActivityIndicator color="#fff" />
        ) : platinum ? (
          <>
            <Text style={styles.price}>{platinum.price} INR</Text>
            <Text style={styles.timestamp}>{platinum.timestamp}</Text>
          </>
        ) : (
          <Text style={styles.error}>Error fetching Platinum</Text>
        )}
        <TouchableOpacity style={styles.tileButton} onPress={refetchPlat}>
          <Text style={styles.tileButtonText}>Refresh</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  tile: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  goldTile: {
    backgroundColor: "#FFD700",
  },
  platTile: {
    backgroundColor: "#C0C0C0",
  },
  metal: { fontSize: 22, fontWeight: "700", marginBottom: 5, color: "#fff" },
  price: { fontSize: 20, fontWeight: "600", color: "#fff" },
  timestamp: { fontSize: 14, color: "#f0f0f0" },
  error: { color: "#ff4d4f", fontWeight: "bold" },
  tileButton: {
    marginTop: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#333",
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  tileButtonText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
});
