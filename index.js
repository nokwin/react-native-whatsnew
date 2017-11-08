import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		alignItems: 'center',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 10,
		backgroundColor: 'rgb(255, 255, 255)'
	},
	titleText: {
		fontSize: 34,
		fontWeight: 'bold',
		marginTop: 48,
	},
	list: {
		marginTop: 24,
	},
	listItem: {
		paddingHorizontal: 16,
		paddingBottom: 16,
	},
	listItemTitle: {
		fontSize: 34,
		paddingBottom: 8,
	},
	listItemText: {
		fontSize: 17,
	},
	nextButton: {
		backgroundColor: 'rgb(0, 0, 0)',
		borderRadius: 8,
		marginVertical: 24,
	},
	nextButtonText: {
		lineHeight: 48,
		borderRadius: 8,
		color: 'rgb(229, 235, 41)',
		textAlign: 'center',
		fontSize: 17,
		backgroundColor: 'transparent',
	},
});

export default class WhatsNew extends PureComponent {
	static propTypes = {
		data: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})).isRequired,
		onPress: PropTypes.func.isRequired,
		containerStyle: View.propTypes.style,
		titleStyle: Text.propTypes.style,
		listStyle: FlatList.propTypes.style,
		listItem: View.propTypes.style,
		listItemTitle: Text.propTypes.style,
		listItemText: Text.propTypes.style,
		buttonStyle: View.propTypes.style,
		buttonTextStyle: Text.propTypes.style
	};

	static defaultProps = {
		containerStyle: null,
		titleStyle: null,
		listStyle: null,
		listItem: null,
		listItemTitle: null,
		listItemText: null,
		buttonStyle: null,
		buttonTextStyle: null
	}

	render() {
		const {
			data,
			onPress,
			containerStyle,
			titleStyle,
			listStyle,
			listItem,
			listItemTitle,
			listItemText,
			buttonStyle,
			buttonTextStyle
		} = this.props;
		const { width, height } = Dimensions.get('window');

		return (
			<View style={[styles.container, { height }, containerStyle]}>
				<Text style={[styles.titleText, titleStyle]}>What&apos;s New</Text>
				<FlatList
					data={data}
					keyExtractor={(__, index) => `feature_${index}`}
					style={[styles.list, { width, height }, listStyle]}
					renderItem={({ item }) => (
						<View style={[styles.listItem, listItem]}>
							<Text style={[styles.listItemTitle, listItemTitle]}>{item.title}</Text>
							<Text style={[styles.listItemText, listItemText]}>{item.text}</Text>
						</View>
					)}
				/>
				<TouchableWithoutFeedback onPress={onPress}>
					<View style={[styles.nextButton, buttonStyle]}>
						<Text style={[styles.nextButtonText, { width: width - 32 }, buttonTextStyle]}>Continue</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}
