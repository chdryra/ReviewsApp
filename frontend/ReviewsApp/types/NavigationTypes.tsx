import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
    Reviews: undefined;
};

export const RootStack = createStackNavigator<RootStackParamList>();
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type SignupScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ReviewsScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
