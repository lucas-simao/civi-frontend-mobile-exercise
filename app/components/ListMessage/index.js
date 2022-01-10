import React from 'react';
import {FlatList, View} from 'react-native';
import ItemMessage from '../ItemMessage';

export default function ListMessages({data}) {
  const renderItem = ({item}) => <ItemMessage item={item} />;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}-${item.id}`}
      />
    </View>
  );
}
