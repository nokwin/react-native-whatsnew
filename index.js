import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableWithoutFeedback, Animated } from 'react-native';
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
		onPress: PropTypes.func.isRequired,
		data: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})),
		containerStyle: Animated.View.propTypes.style,
		titleStyle: Animated.Text.propTypes.style,
		listStyle: FlatList.propTypes.style,
		listItemStyle: Animated.View.propTypes.style,
		listItemTitleStyle: Animated.Text.propTypes.style,
		listItemTextStyle: Animated.Text.propTypes.style,
		buttonStyle: Animated.View.propTypes.style,
		buttonTextStyle: Animated.Text.propTypes.style,
		isAnimated: PropTypes.bool,
		titleText: PropTypes.string,
		buttonText: PropTypes.string
	};

	static defaultProps = {
		data: [],
		containerStyle: null,
		titleStyle: null,
		listStyle: null,
		listItemStyle: null,
		listItemTitleStyle: null,
		listItemTextStyle: null,
		buttonStyle: null,
		buttonTextStyle: null,
		isAnimated: false,
		titleText: 'What\'s new',
		buttonText: 'Continue'
	};

	render() {
		const {
			data,
			onPress,
			containerStyle,
			titleStyle,
			listStyle,
			listItemStyle,
			listItemTitleStyle,
			listItemTextStyle,
			buttonStyle,
			buttonTextStyle,
			isAnimated,
			titleText,
			buttonText
		} = this.props;
		const { width, height } = Dimensions.get('window');

		const WNView = isAnimated ? Animated.View : View;
		const WNText = isAnimated ? Animated.Text : Text;

		return (
			<WNView style={[styles.container, { height }, containerStyle]}>
				<WNText style={[styles.titleText, titleStyle]}>{titleText}</WNText>
				<FlatList
					data={data}
					keyExtractor={(__, index) => `feature_${index}`}
					style={[styles.list, { width, height }, listStyle]}
					renderItem={({ item }) => (
						<WNView style={[styles.listItemStyle, listItemStyle]}>
							<WNText style={[styles.listItemTitleStyle, listItemTitleStyle]}>{item.title}</WNText>
							<WNText style={[styles.listItemTextStyle, listItemTextStyle]}>{item.text}</WNText>
						</WNView>
					)}
				/>
				<TouchableWithoutFeedback onPress={onPress}>
					<WNView style={[styles.nextButton, buttonStyle]}>
						<WNText style={[styles.nextButtonText, { width: width - 32 }, buttonTextStyle]}>{buttonText}</WNText>
					</WNView>
				</TouchableWithoutFeedback>
			</WNView>
		);
	}
}
