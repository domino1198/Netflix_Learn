import * as React from 'react';
import styles from './styles';
import { Image, FlatList } from 'react-native';
import { View, Text, } from '../Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface IcategoryData {
    category: {
        id: string;
        title: string;
        movies: {
            id: string;
            poster: string;
        }[];
    }
}

const HomeCategory = (props: IcategoryData) => {
    const navigation = useNavigation();
    const { category } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <View>
                        <Image style={styles.image} source={{ uri: item.poster }} />
                        <TouchableOpacity onPress={() => navigation.navigate("Serial")}>
                            <Text>
                                перейти
                        </Text>
                        </TouchableOpacity>
                    </View>
                )}
                horizontal />
        </View>
    );
}

export default HomeCategory;