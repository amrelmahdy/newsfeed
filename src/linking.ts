import { Linking } from "react-native";
const getInitialURL = async () => {
  const initialDeepLinkUrl = await Linking.getInitialURL();

  return initialDeepLinkUrl;
};

const subscribe = (listener: (url: string) => void) => {
  const onReceiveURL = ({ url }: { url: string }) => {
    listener(url);
  };

  const linkingSubscription = Linking.addEventListener("url", onReceiveURL);

  return () => {
    linkingSubscription.remove();
  };
};

export const linking = {
  prefixes: ["newsfeed://"],
  config: {
    initialRouteName: "Home" as const,
    screens: {
      Home: "home/:id",
    },
  },
  getInitialURL,
  subscribe
};