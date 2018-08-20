import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import { Constants } from 'expo';

const { width } = Dimensions.get('window');
const height = width * 0.8;
const fontSize = 30;

class Card extends Component {

	colorBrightness = (r, g, b) => {
		return (r * 299 + g * 587 + b * 114) / 1000
	}

	render() {
		const { text, author } = this.props;

		const r = Math.floor(Math.random() * 255);
		const g = Math.floor(Math.random() * 255);
		const b = Math.floor(Math.random() * 255);
		const color = 'rgb(' + r + ',' + g + ',' + b + ')'

		var textColor = "rgb(0,0,0)";
		var brightness = this.colorBrightness(r, g, b);
		if (brightness < 123) textColor = "rgb(255,255,255)";

		const cardStyle = StyleSheet.create({
			textViewContainer: {
				padding: 5,
				flex: 1,
				justifyContent: 'space-between',
				alignItems: 'center',
				width,
				height,
			},
			randomBackground: {
				backgroundColor: color
			},
			textContainer: {
				flex: 1,
				flexDirection: 'row',
				justifyContent: "flex-start",
			},
			textStyle: {
				fontSize: fontSize,
				color: textColor,
			},
			authorContainer: {
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'flex-end',
				alignItems: "flex-end",
			},
			authorStyle: {
				color: textColor,
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

		const caroselStyle = StyleSheet.create({
			scrollContainer: {
				height,
			},
		});

		if (messages != null && messages.length > 0) {
			return (
				<View
					style={caroselStyle.scrollContainer}
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
		let messages = [
			{
				text: "Coisas boas acontecem sempre",
				author: "Caneca",
			},
			{
				text: "Esse é o meu jeito ninja de ser",
				author: "Naruto Uzumaki",
			},
			{
				text: "Elementar meu caro Wattson",
				author: "Sherlock Holmes",
			},
			{
				text: "Você não precisa aceitar um destino que não quer",
				author: "Naruto Uzumaki",
			},
			{
				text: "Sorrir é a melhor maneira de lidar com situações difíceis",
				author: "Naruto Uzumaki",
			},
			{
				text: "Eu queria ser como as nuvens, elas são livres",
				author: "Naruto Uzumaki",
			},
			{
				text: "Sonhos tornam-se ideais",
				author: "The World - Death Note Opening",
			},
			{
				text: "Dattebayo!!",
				author: "Naruto Uzumaki",
			},
			{
				text: "Você vê, mas não observa.",
				author: "Sherlock Holmes",
			},
			{
				text: "Os pequenos detalhes são sempre os mais importantes.",
				author: "Sherlock Holmes",
			},
			{
				text: "Par uma mente ampla, nada é pequeno.	",
				author: "Sherlock Holmes",
			},
			{
				text: "Agora é xeque e, por acaso, mate.",
				author: "Sherlock Holmes",
			},
			{
				text: "Sempre vou estar com você",
				author: "Andy",
			},
			{
				text: "Seja positiva",
				author: "Andy",
			},
			{
				text: "Você me faz muito feliz",
				author: "Andy",
			},
			{
				text: "Não importa a linha de mundo, a época ou o lugar. Eu sempre vou te amar.",
				author: "Okabe Rintarou",
			},
			{
				text: "Perdi",
				author: "O Jogo",
			},
			{
				text: "Destino é para manés...",
				author: "Blair Waldorf",
			},
			{
				text: "Não sou egoísta. Apenas valorizo a única pessoa do mundo em quem eu posso confiar: eu mesma.",
				author: "Blair Waldorf",
			},
			{
				text: "Não desista só porque as coisas estão difíceis.",
				author: "Blair Waldorf",
			},
			{
				text: "Quem fala que dinheiro nao traz felicidade nunca deve ter ido o shopping.",
				author: "Blair Waldorf",
			},
			{
				text: "Beleza é uma questão de atitude.",
				author: "Blair Waldorf",
			},
			{
				text: "Tem pessoas que gostam de ver o melhor nas pessoas. Eu prefiro ver a verdade.",
				author: "Blair Waldorf",
			},
			{
				text: "Não desista só porque as coisas estão difíceis.",
				author: "Blair Waldorf",
			},
			{
				text: "Eu sou um anjo do Senhor.",
				author: "Castiel",
			},
			{
				text: "A saída depende de para onde você quer ir...",
				author: "Gato de Cheshire",
			},
			{
				text: "A única forma de chegar ao impossível é acreditar que é possível",
				author: "O Chapeleiro Maluco",
			},
			{
				text: "Rir durante o dia faz com que você durma melhor a noite.",
				author: "O Chapeleiro Maluco",
			},
			{
				text: "Se você não sabe para onde, ir qualquer caminho serve.",
				author: "Gato de Cheshire",
			},
			{
				text: "Eu não sou louco, minha realidade é diferente da sua.",
				author: "O Chapeleiro Maluco",
			},
			{
				text: "Sabe qual é a semelhança entre um corvo e uma escrivaninha?",
				author: "O Chapeleiro Maluco",
			},
			{
				text: "Emocionante não é? Quebrar as regras",
				author: "Hermione Granger",
			},
			{
				text: "Desculpe, mas eu não gosto das pessoas só porque elas são bonitas.",
				author: "Hermione Granger",
			},
			{
				text: "Não se desculpe, só melhore",
				author: "Xena",
			},
			{
				text: "“É Leviosa. Não Leviosaaa",
				author: "Hermione Granger",
			},
			{
				text: "Espero que estejam satisfeitos com o que fizeram. Podíamos ter sido mortos, ou pior, expulsos",
				author: "Hermione Granger",
			},
			{
				text: "Nós não duraríamos dois dias sem ela. Não conte para ela que eu disse isso.",
				author: "Rony Weasley",
			},
			{
				text: "Todos nós aqui somos loucos",
				author: "Gato de Cheshire",
			},
			{
				text: "Mantenha os amigos perto, e os inimigos mais perto ainda",
				author: "Sun Tzu",
			},
			{
				text: "As oportunidades multiplicam-se à medida que são agarradas.",
				author: "Sun Tzu",
			},
			{
				text: "A suprema arte da guerra é derrotar o inimigo sem lutar.",
				author: "Sun Tzu",
			},
			{
				text: "A evolução do Homem passa, necessariamente, pela busca do conhecimento.",
				author: "Sun Tzu",
			},
			{
				text: "Conheça o seu inimigo como a si mesmo e não precisa temer o resultado de cem batalhas.",
				author: "Sun Tzu",
			},
			{
				text: "Quero ser feliz ao seu lado",
				author: "Andy & Lana",
			},
			{
				text: "Quero ser o seu apoio",
				author: "Andy & Lana",
			},
			{
				text: "Estou com saudades",
				author: "Andy & Lana",
			},
			{
				text: "Eu não sei se amo mais pudim ou sorvete",
				author: "Lana",
			},
			{
				text: "É anti-dialético",
				author: "Lana",
			},
			{
				text: "É relativo",
				author: "Andy",
			},
			{
				text: "Você é capaz de tudo meu amor",
				author: "Andy",
			},
			{
				text: "Você é simplesmente incrível",
				author: "Andy",
			},
			{
				text: "Não gosto dos meus aniversários, mas você me deixa ansiosa por eles",
				author: "Lana",
			},
			{
				text: "Andyyyyyyyyyyyyyyyyyyyyyy",
				author: "Lana",
			},
			{
				text: "Lanaaaaaaaaaaaaaaaaaaa",
				author: "Andy",
			},
			{
				text: "Faça da queda um passo de dança",
				author: "Fernando Sabino",
			},
			{
				text: "A vida é um palco e você pode fazer um belo show",
				author: "O vendedor de sonhos",
			},
			{
				text: "Eu penso em três coisas impossíveis no café da manhã",
				author: "Alice",
			},
		];

		messages = messages.sort(() => {
			return 0.5 - Math.random()
		}).slice(0, Math.round(messages.length / 3.5));

		messages.push({
			text: "Espero que essas mensagens tenham lhe deixado feliz",
			author: "Andy"
		});

		messages.push({
			text: "Veja-as sempre",
			author: "Andy"
		});

		messages.push({
			text: "Feliz aniversário meu amor",
			author: "Andy"
		});

		messages.push({
			text: "Obrigadaaaaaaaa",
			author: "Lana"
		});

		messages.push({
			text: "Mas eu queria uma jaquetaaaaaaaaa",
			author: "Lana"
		});

		messages.push({
			text: "Eu sei...",
			author: "Andy"
		});

		messages.push({
			text: "Com amor e carinho, para você sentir amor e carinho",
			author: "Andy"
		});

		messages.push({
			text: "E que te aquecerá em todas as formas de frio",
			author: "Andy"
		});

		messages.push({
			text: "Eu te amo",
			author: "Andy"
		});

		messages.push({
			text: "Do seu verdadeiro amor...",
			author: ""
		});

		messages.push({
			text: "Andy <3",
			author: "By Andy"
		});

		const appStyle = StyleSheet.create({
			container: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				paddingTop: Constants.statusBarHeight,
			},
			aniverText: {
				textAlign: "center",
				color: 'rgb(210,0,0)',
				fontSize: fontSize * 1.3,
			},
			footerText: {
				position: "absolute",
				bottom: 0,
				fontSize: fontSize / 1.5,
			}
		});

		return (
			<View style={appStyle.container} >
				<Text style={appStyle.aniverText}>Frases para te deixar feliz</Text>
				<Carousel messages={messages} />
				<Text style={appStyle.aniverText}>Feliz Aniversário 1.9</Text>
				<Text style={appStyle.footerText}>Andy & Lana</Text>
			</View>
		);
	}
}