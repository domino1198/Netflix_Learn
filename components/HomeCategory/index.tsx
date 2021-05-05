import * as React from 'react';
import styles from './styles';
import { View, Text, Image, FlatList } from 'react-native';
// import category from '../../assets/data/category';

// const firstCategory = category.items[0];

interface IcategoryData {
    category:{
        id: string;
        title: string;
        movies: {
            id: string;
            poster: string;
        } [];
}
}

const HomeCategory = (props: IcategoryData) => {
    const { category } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => <Image style={styles.image} source={{ uri: item.poster }} />}
                horizontal />
        </View>
    );
}

export default HomeCategory;