import { html, Component } from "../lib/index.js";
import i18next from "../lib/i18n";

export default class NetworkForm extends Component {
	state = {
		username: "",
		password: "",
	};

	constructor(props) {
		super(props);

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		if (props.username) {
			this.state.username = props.username;
		}
	}

	handleInput(event) {
		let target = event.target;
		let value = target.type == "checkbox" ? target.checked : target.value;
		this.setState({ [target.name]: value });
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit(this.state.username, this.state.password);
	}

	render() {
		return html`
			<form onInput=${this.handleInput} onSubmit=${this.handleSubmit}>
				<label>
					${i18next.t("Username")}:<br/>
					<input type="username" name="username" value=${this.state.username} required/>
				</label>
				<br/><br/>

				<label>
					${i18next.t("Password")}:<br/>
					<input type="password" name="password" value=${this.state.password} required autofocus/>
				</label>
				<br/><br/>

				<button>${i18next.t("Login")}</button>
			</form>
		`;
	}
}
