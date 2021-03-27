import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';

const LoadMoreButton = ({ onPress, disabled, text, loading }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        disabled={disabled}
        style={styles.loadMoreBtn}>
        <Text style={styles.btnText}>{text}</Text>
        {loading ? (
          <ActivityIndicator color="blue" style={{marginLeft: 8}} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
	loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
	btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default LoadMoreButton; 