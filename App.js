import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import { Constants } from 'expo';

const { width } = Dimensions.get('window');
const height = width * 0.8;
const fontSize = 30;

class Card extends Component {
	render() {
		const { text, author } = this.props;

		console.log("Card", text, author);

		const color = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')'
		const black = 'rgb(0,0,0)';

		const cardStyle = StyleSheet.create({
			textViewContainer: {
				padding: 10,
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				width,
				height,
			},
			randomBackground: {
				backgroundColor: color
			},
			textContainer: {
				flex: 1,
				flexDirection: 'row',
			},
			textStyle: {
				fontSize: fontSize,
				color: black,
			},
			authorContainer: {
				flex: 1,
				flexDirection: 'row',
			},
			authorStyle: {
				alignSelf: 'flex-end',
				position: 'absolute',
				fontSize: fontSize * 0.7,
				paddingBottom: fontSize * 1.5,
			}
		});

		return (
			<View style={[cardStyle.textViewContainer, cardStyle.randomBackground]}>
				<View>
					<Text style={cardStyle.textStyle}>{text}</Text>
				</View>
				<View style={[cardStyle.authorContainer]}>
					<Text style={cardStyle.authorStyle}>~ {author}</Text>
				</View>
			</View >
		);
	}
}

class Carousel extends Component {
	render() {
		const { messages } = this.props;

		if (messages != null && messages.length > 0) {
			return (
				<View
					style={styles.scrollContainer}
				>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						{
							messages.map((message, index) => {
								return (
									<Card key={index} text={message.text} author={message.author} />
								);
							})
						}
					</ScrollView>
				</View>
			);
		}
		return null;
	}
}

export default class App extends Component {
	render() {
		const messages = [
			{
				text: "Coisas boas acontecem sempre",
				author: "Caneca <3",
			},
			{
				text: "Esse é o meu jeito ninja de ser",
				author: "Naruto Uzumaki",
			},
			{
				text: "Elementar meu caro Wattson",
				author: "Sherlock Holmes",
			},
		];

		const appStyle = StyleSheet.create({
			aniverText: {
				color: 'rgb(210,0,0)',
				fontSize: fontSize * 1.5,
			}
		});

		return (
			<View style={styles.container} >
				<Text style={appStyle.aniverText}>Feliz Aniversário</Text>
				<Carousel messages={messages} />
				<Text style={appStyle.aniverText}>Andy & Lana</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,

	},
	scrollContainer: {
		height,
	},
	author: {
		textAlign: 'right',
	}
});