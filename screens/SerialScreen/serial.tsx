import * as React from 'react';
import styles from './styles';
import { View, Text } from '../../components/Themed';
import { Image } from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import movie from '../../assets/data/movie';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import SerialDetails from '../../components/SerialDetails'

const firstSerial = movie.seasons.items[0].episodes.items[0];

const SerialPage = () => {
    return (
        <>
            <View style={styles.header}>

            </View>

            <FlatList
                data={movie.seasons.items[0].episodes.items}
                renderItem={({ item }) => <SerialDetails episode={item} />}
                ListHeaderComponent={(
                    <>
                        <Image style={styles.img} source={{ uri: firstSerial.poster }} />
                        <View style={{height:'42%'}}>
                            <View style={{ padding: 3 }}>
                                <Text style={styles.title}>
                                    {movie.title}
                                </Text>
                                <View style={styles.container}>

                                    <Text style={styles.progress}>
                                        98% match
                            </Text>
                                    <Text style={styles.year}>
                                        {movie.year}
                                    </Text>
                                    <View style={styles.containerAge}>
                                        <Text >
                                            12+
                </Text>
                                    </View>
                                    <Text style={styles.year}>
                                        {movie.numberOfSeasons} Seasons
                </Text>
                                    <MaterialIcons name="hd" size={24} color="white" />
                                </View>
                                <View style={{ alignItems: 'center', marginVertical: 3, justifyContent: 'space-between', height: '27%' }}>
                                    <TouchableOpacity style={styles.btnLight}>
                                        <Entypo name="controller-play" size={16} color="black" />
                                        <Text style={styles.btnLightText} >Play</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.btnDark}>
                                        <AntDesign name="download" size={16} color="white" />
                                        <Text style={styles.btnDarkText}>Download</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
                                <Text style={styles.year}>Cast: {movie.cast}</Text>
                                <Text style={styles.year}>Creator: {movie.creator}</Text>
                                <View style={{ flexDirection: 'row', marginVertical: 20, }}>
                                    <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                        <AntDesign name="plus" size={24} color={'white'} />
                                        <Text style={{ color: 'darkgrey', marginTop: 5 }}>My List</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                        <Feather name="thumbs-up" size={24} color="white" />
                                        <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                        <FontAwesome name="send-o" size={24} color="white" />
                                        <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </>
                )}
            />

        </>

    );
}

export default SerialPage;
