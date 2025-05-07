import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigation from "./src/navigation/MainStackNavigation";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Toast from "react-native-toast-message";
import ToastCustom from "./src/components/notification/ToastCustom";
export default function App() {
  const queryClient = new QueryClient();
  const configToastMemo = useMemo(() => {
    return {
      ToastCustom: (internalState) => <ToastCustom {...internalState.props} />,
    };
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <MainStackNavigation />
            <Toast config={configToastMemo} position="top" />
          </NavigationContainer>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
