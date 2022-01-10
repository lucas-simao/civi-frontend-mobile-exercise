import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
var dayjs = require('dayjs');

export default function ItemMessage({item}) {
  const [show, setShow] = useState(false);

  const formatTitle = title => {
    if (!title) {
      return;
    }
    let newTitle = title.substr(0, 15);
    return title.length > 15 ? newTitle.concat('...') : newTitle;
  };

  const formatDateTime = timestamp => {
    if (!timestamp) {
      return;
    }
    return dayjs(timestamp * 1000).format('DD/MM/YYYY HH:mm:ss');
  };

  const icon = prop => {
    return !prop
      ? require('../../assets/arrow-bottom.png')
      : require('../../assets/arrow-top.png');
  };

  return (
    <View
      style={[
        {backgroundColor: item.read ? '#F4F4F4' : '#D2F9E4'},
        styles.container,
      ]}>
      <Pressable
        onPress={() => {
          setShow(!show);
          item.read = true;
        }}>
        <View style={styles.item}>
          <View>
            <Text style={styles.title}>Titulo</Text>
            <Text style={styles.titleValue}>{formatTitle(item.subject)}</Text>
          </View>
          <View style={styles.containerDate}>
            <View>
              <Text style={styles.title}>Data e hora</Text>
              <Text style={styles.titleValue}>
                {formatDateTime(item.timestamp)}
              </Text>
            </View>
            <Image style={styles.icon} source={icon(show)} />
          </View>
        </View>
        {show && (
          <View style={styles.detail}>
            <Text style={styles.title}>Detalhes</Text>
            <Text style={styles.titleValue}>{item.detail}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    color: '#444444',
  },
  titleValue: {
    fontSize: 16,
    color: 'black',
    textTransform: 'capitalize',
  },
  containerDate: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    marginLeft: 5,
  },
  detail: {
    paddingTop: 10,
  },
});
