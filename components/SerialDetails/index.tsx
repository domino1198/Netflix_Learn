import * as React from 'react';
import styles from './styles';
import { Image } from 'react-native';
import { View, Text, } from '../Themed';
import { AntDesign } from '@expo/vector-icons';

interface Iserial {
    episode: {
        id: string;
        title: string;
        poster: string;
        duration: string;
        plot: string;
        video: string;
    }
}

const SerialDetails = (props: Iserial) => {

    const { episode } = props;
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10, marginHorizontal:10 }}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center'
                }}>
                    <Image style={styles.img} source={{ uri: episode.poster }} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.title}>
                            {episode.title}
                        </Text>
                        <Text style={styles.duration}>
                            {episode.duration}
                        </Text>
                    </View>
                </View>
                <AntDesign name="download" size={24} color={'white'} />
            </View>
            <View>
                <Text style={styles.plot}>
                    {episode.plot}
                </Text>
            </View>
        </View>
    );
}

export default SerialDetails;