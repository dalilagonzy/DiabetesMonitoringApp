export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Sugar: undefined;
  Food: undefined;
  Home: undefined;
  Coach: undefined;
  Exercise: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
  TabOneScreen: undefined;
  TabTwoScreen: undefined;
  TabFourScreen: undefined;
  TabFiveScreen: undefined;
  ProfileScreen: undefined
};

export type TabFourParamList = {
  TabFourScreen: undefined;
  CoachInfoScreen: {coach: string};
};

export type TabFiveParamList = {
  TabFiveScreen: undefined;
  ExerciseRecommendationsScreen: undefined;
};

export type CoachParamList = {
  name: string;
  body: string;
  imgUrl: string;
};

export type ProfileScreenParamList = {
  ProfileScreen: undefined;
};
