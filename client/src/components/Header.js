import React, { Component } from 'react';
import styled from 'styled-components';

const PageHeader = styled.header`
	font-family: 'Stardos Stencil', cursive;
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	background-color: black;
`;

const Title = styled.h1`
	color: white;
	border: white solid 1px;
	padding: 1.2rem;
	margin: 2px;
	border-radius: 20px 0 0 20px;
	a {
		color: white;
		text-decoration: none;
		cursor: pointer;
	}
`;

const Navigators = styled.a`
	color: white;
	font-size: 1.4rem;
	margin-top: 0.8rem;
	margin-bottom: 0.8rem;
	border: white solid 1px;
	border-radius: 0px 5px 5px 0px;
	padding: 10px;
	padding-top: 2.2rem;
`;

const LoginNav = styled.a`
	color: white;
	font-size: 1.4rem;
	margin-top: 0.8rem;
	margin-bottom: 0.8rem;
	border: white solid 1px;
	padding: 10px;
	padding-top: 2.2rem;
`;
const SearchBox = styled.input`
	font-family: 'Stardos Stencil', cursive;
	display: flex;
	width: 99vw;
	color: black;
	font-size: 1.3rem;
	background-color: white;
	height: 2rem;
	border-color: white;
	border-radius: 10px;
`;

const Gravatar = styled.img`
	margin-top: 0.8rem;
	margin-bottom: 0.8rem;
	border-radius: 20px;
	padding: 10px;
`;

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
		};
	}

	changeSearch = (e) => {
		this.setState({
			search: e.target.value,
		});
	};

	render() {
		return (
			<div>
				<PageHeader>
					<div>
						<Title>
							<a href='/'>
								Urban <br />
								Boulder Project
							</a>
						</Title>
					</div>
					<Navigators href='/about'>About</Navigators>
					<Navigators href='/crags'>View Crags</Navigators>
					<Navigators href='/blog'>Blogs</Navigators>
					<Navigators href='/create'>Create</Navigators>
					<div>
						{localStorage.getItem('emailHash') ? (
							<a href={`/dashboard/${this.props.user._id}`}>
								<Gravatar
									src={`https://www.gravatar.com/avatar/${localStorage.getItem(
										'emailHash'
									)}?s=120&d=retro`}
									alt='gravatar'
									width={90}
								/>
								<p>Dashboard</p>
							</a>
						) : (
							<LoginNav href='/login'>Login</LoginNav>
						)}
					</div>
					<LoginNav href='/register'>Register</LoginNav>
				</PageHeader>
				<SearchBox
					type='text'
					placeholder='Search...'
					value={this.state.search}
					onChange={this.changeSearch}
				/>
			</div>
		);
	}
}