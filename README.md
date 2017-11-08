# react-native-whatsnew
[![Travis](https://img.shields.io/travis/nokwin/react-native-whatsnew/master.svg)](https://travis-ci.org/nokwin/react-native-whatsnew)
[![npm](https://img.shields.io/npm/v/react-native-whatsnew.svg)]()

<p align="center"><img src ="example.png" width="300px"/></p>

## Description
WhatsNew automatically displays a short description of the new features when users update your app. This is similar to what happens in Apple's apps like Pages, Numbers, Keynote, iMovie and TestFlight.

## Usage
```js
import WhatsNew from 'react-native-whatsnew';

const App = () => {
	const data = [{
		title: 'First title',
		text: 'This is the text for first title'
	}, {
		title: 'Second title',
		text: 'This is the text for second title'
	}];
	
	const onPress = () => {
		// Handle your action for Continue button
	};
	
	return <WhatsNew data={data} onPress={onPress} />
}
```

## Props
```json
{
  "onPress": "Function, that invokes when you press 'Continue' button",
  "data": {
    "title": "Item title. Required field",
    "text": "Item text. Required field"
  },
  "containerStyle": "Main wrapper styles",
  "titleStyle": "'What's new' style",
  "listStyle": "Main list style",
  "listItemStyle": "List item style",
  "listItemTitleStyle": "List item title style",
  "listItemTextStyle": "List item text style",
  "buttonStyle": "'Continue' button style",
  "buttonTextStyle": "'Continue' text style",
  "isAnimated": "Allow use animation for all components",
  "titleText": "Change 'What's new' with your text",
  "buttonText": "Change 'Continue' on button with your text"
}
```

## Author
I'm [Dmytro Batarin](https://batarin.zp.ua). 
Email: [contact@batarin.zp.ua](mailto:contact@batarin.zp.ua).
Inspired by [BalestraPatrick/WhatsNew](https://github.com/BalestraPatrick/WhatsNew)