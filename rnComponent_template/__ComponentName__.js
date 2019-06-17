import React, { Component } from 'react';
/* IF !StyledComponents */
import { View, Text, StyleSheet } from 'react-native';
/* ENDIF *//* IF StyledComponents */
import { View, Text } from 'react-native';
import { Container } from './__ComponentName__Styles.js';
/* ENDIF */

/* IF !StyledComponents */
export default class __ComponentName__ extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>__ComponentName__ Component</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
/* ENDIF *//* IF StyledComponents */
export default class __ComponentName__ extends Component {
	render() {
		return (
			<Container>
				<View>
					<Text>__ComponentName__ Component</Text>
				</View>
			</Container>
		);
	}
}
/* ENDIF */