import * as React from 'react';
import styles from './styles';
import {FlatList } from 'react-native';
import category from '../../assets/data/category';
import HomeCategory from "../../components/HomeCategory";
import { View,} from '../../components/Themed';


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

