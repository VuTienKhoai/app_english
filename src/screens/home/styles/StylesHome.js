import { StyleSheet } from "react-native";

export const StylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  centerRow: {
    alignItems: "center",
    marginVertical: 16,
  },
  sideRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
    paddingHorizontal: 32,
  },
  nodeContainer: {
    alignItems: "center",
    flex: 1,
  },
  centerAlign: {
    alignSelf: "center",
  },
  leftAlign: {
    alignItems: "flex-start",
  },
  rightAlign: {
    alignItems: "flex-end",
  },
  circleActive: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#4caf50",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  circleLocked: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  lessonLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 4,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  groupContainer: {
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    position: "relative",
  },
  lessonWrapper: {
    position: "absolute",
    alignItems: "center",
  },
});
