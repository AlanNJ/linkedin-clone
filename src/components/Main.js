import React from "react";
import styled from "styled-components";
import PostModl from "./PostModl";
import PostModel from "./PostModel";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getArticles } from "../actions";
import ReactPlayer from "react-player";

export const Main = (props) => {
	const [showModel, setShowModel] = useState("close");
	useEffect(() => {
		props.getArticles();
	}, []);

	const handleClick = (e) => {
		e.preventDefault();
		switch (showModel) {
			case "close":
				setShowModel("open");
				break;
			case "open":
				setShowModel("close");
				break;
			default:
				setShowModel("close");
		}
	};
	return (
		<>
			<Container>
				<MainBox>
					<ShareBox>
						share
						<div>
							{props.user && props.user.photoURL ? (
								<img src={props.user.photoURL} alt="" />
							) : (
								<img src="images/user.svg" alt="" />
							)}
							<button
								onClick={handleClick}
								disabled={props.loading ? true : false}
							>
								Start a Post
							</button>
						</div>
					</ShareBox>
					<Content>
						{props.loading && <img src="./images/spinner.gif" />}
					</Content>
					<Options>
						<button>
							<img src="images/picon.png" alt="" />
							<span>Photos</span>
						</button>
						<button>
							<img src="images/video.png" alt="" />
							<span>Video</span>
						</button>
						<button>
							<img src="images/event.png" alt="" />
							<span>Events</span>
						</button>
						<button>
							<img src="images/write.png" alt="" />
							<span>Write article</span>
						</button>
					</Options>
					{props.articles.length > 0 &&
						props.articles.map((article, key) => (
							<Article key={key}>
								<Post>
									<Left>
										<div>
											<img src={article.actor.image} alt="" />
											<div>
												<span>{article.actor.title}</span>
												<span>{article.actor.description}</span>
												<span>
													{article.actor.date.toDate().toLocaleDateString()}
												</span>
											</div>
										</div>
										<h1>{article.description}</h1>
									</Left>
									<Right>
										<img src="images/dots.png" alt="" />
									</Right>
								</Post>
								<Comments>
									<a>
										{!article.image && article.video ? (
											<ReactPlayer width={"100%"} url={article.video} />
										) : (
											article.image && <img src={article.image} alt="" />
										)}
									</a>
									<div>
										<div>
											<img src="images/like-icon.webp" alt="" />
										</div>
										<div>
											<span>You and 2.5k others...</span>
										</div>
									</div>
								</Comments>

								<Items>
									<button>
										<img src="images/like-icon.webp" />
										<span>Like</span>
									</button>
									<button>
										<img src="images/comment-icon.png" />
										<span>Comment</span>
									</button>
									<button>
										<img src="images/share-icon.png" />
										<span>Share</span>
									</button>
									<button>
										<img src="images/share-.png" />
										<span>Send</span>
									</button>
								</Items>
							</Article>
						))}

					<PostModel showModel={showModel} handleClick={handleClick} />
				</MainBox>
			</Container>
		</>
	);
};

const Container = styled.div`
	grid-area: main;
`;
const MainBox = styled.div`
	background: #fff;
`;
const Comments = styled.div`
	box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0/20%);
	div {
		margin-bottom: 5px;
		display: flex;
		div {
			display: flex;
			align-items: center;
			justify-content: center;
			:first-child {
				background-color: rgba(0, 0, 0, 0.3);
				width: 34px;
			}

			img {
				height: 24px;
				min-width: 15px;
				background: none;
			}
		}
	}

	div :nth-child(2) {
		margin-left: 10px;
		span {
			font-size: 14px;
			font-weight: 600;
		}
	}

	img {
		max-height: 400px;
		min-width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
	}
`;
const Items = styled.div`
	display: flex;
	justify-content: center;
	box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0/20%);
	padding-bottom: 4px;
	button {
		height: 30px;
		width: 90px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.1);
		cursor: pointer;
		border-radius: 5px;
		color: #0a66c2;
		:hover {
			background: rgba(0, 0, 0, 0.2);
			transition: 0.2s ease;
		}
		img {
			height: 20px;
			width: 20px;
		}
		span {
			font-size: 12px;
		}
	}
`;
const CommonCard = styled.div`
	text-align: center;
	overflow: hidden;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0/20%);
`;
const ShareBox = styled(CommonCard)`
	outline: none;
	color: rgba(0, 0, 0, 0.6);
	font-size: 18px;
	padding: 10px 10px;
	padding-bottom: 20px;
	div {
		display: flex;
		align-items: center;
		img {
			width: 48px;
			border-radius: 50%;
		}
		button {
			margin-left: 15px;
			padding-left: 16px;
			flex-grow: 1;
			height: 40px;
			border-radius: 30px;
			border: none;
			background: #fff;
			box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0/20%);
			text-align: start;
			font-size: 16px;
			color: rgba(0, 0, 0, 0.7);
		}
	}
`;
const Options = styled.div`
	background: #fff;
	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}
	button {
		padding: 20px 2px;
		max-height: 48px;
		text-align: center;
		align-items: center;
		background: transparent;
		display: flex;

		border: none;
		line-height: 1.5;
		span {
			font-size: 14px;
			color: #70b5f9;
			font-weight: 600;
		}

		:nth-child(3) {
			img {
				max-height: 24px;
			}
		}
	}
`;

const Post = styled(CommonCard)`
	margin-top: 10px;
	display: flex;
	padding: 5px;
	justify-content: space-between;
	div {
		span {
			font-size: 14px;
			padding-top: 2px;
			line-height: 1;
		}
	}

	img:nth-child(1) {
		height: 48px;
		width: 48px;
	}
`;
const Left = styled.div`
	div {
		display: flex;
		margin-bottom: 5px;
		div {
			display: flex;
			flex-direction: column;
			padding-left: 1px;

			span {
				font-size: 12px;
				:nth-child(1) {
					font-weight: 900;
				}
			}
		}
	}
`;
const Right = styled.div`
	img {
		max-height: 24px;
		max-width: 24px;
	}
`;
const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 100px;
		height: 100px;
	}
`;
const Article = styled.div``;
const mapStateToProps = (state) => {
	return {
		user: state.user,
		loading: state.loading,
		articles: state.articles,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getArticles: () => {
			dispatch(getArticles());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
