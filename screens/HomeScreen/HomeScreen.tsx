import * as React from 'react';
import styles from './styles';
import { View, Text, Image, FlatList } from 'react-native';
import category from '../../assets/data/category';
import HomeCategory from "../../components/HomeCategory"


const HomePage = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={category.items}
                renderItem={({ item }) => <HomeCategory category={item}/>}
            />
        </View>
    );
}

export default HomePage;

