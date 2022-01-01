import styled from "styled-components";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase/compat/app";
import postArticleAPI from "../actions/index";
const PostModel = (props) => {
	const [editText, setEditText] = useState("");
	const [image, setImage] = useState("");
	const [videoLink, setVideoLink] = useState("");
	const [assetArea, setAssetArea] = useState("");

	const handleChange = (e) => {
		e.preventDefault();

		const image = e.target.files[0];
		if (image === "" || image === undefined) {
			alert(`not an image, the file is ${typeof image}`);
		} else {
			setImage(image);
		}
	};

	const reset = (e) => {
		setEditText("");
		setImage("");
		setVideoLink("");
		setAssetArea("");
		props.handleClick(e);
	};
	const switchAssetArea = (area) => {
		setImage("");
		setVideoLink("");
		setAssetArea(area);
	};

	const postArticle = (e) => {
		e.preventDefault();
		console.log("hello world");
		if (e.target !== e.currentTarget) {
			console.log("hello");
			return;
		}
		const payload = {
			image: image,
			video: videoLink,
			user: props.user,
			description: editText,
			timestamp: firebase.firestore.Timestamp.now(),
		};
		props.postArticle(payload);
		setAssetArea("");
		reset(e);
		console.log(payload);
	};

	return (
		<>
			{props.showModel === "open" && (
				<Container>
					<Content>
						<Header>
							<h1>Create a Post</h1>
							<button onClick={reset}>
								<img src="images/close-icon.webp" alt="" />
							</button>
						</Header>
						<SharedContent>
							<UserInfo>
								{props.user.photoURL ? (
									<img src={props.user.photoURL} alt="" />
								) : (
									<img src="images/user.svg" alt="" />
								)}
								<span>{props.user.displayName}</span>
							</UserInfo>
						</SharedContent>
						<EditorArea>
							<textarea
								value={editText}
								onChange={(e) => setEditText(e.target.value)}
								placeholder="What do you want to talk about"
							/>
							{assetArea === "image" ? (
								<UploadedImage>
									<input
										type="file"
										accept="image gif"
										style={{ display: "inline-block" }}
										onChange={handleChange}
									></input>
									{image && <img src={URL.createObjectURL(image)} />}
								</UploadedImage>
							) : (
								assetArea === "video" && (
									<>
										<input
											type="text"
											placeholder="Please Input the video link"
											value={videoLink}
											onChange={(e) => setVideoLink(e.target.value)}
										></input>

										{videoLink && (
											<ReactPlayer width={"100%"} url={videoLink} />
										)}
									</>
								)
							)}
						</EditorArea>
						<ShareCreations>
							<AttachAssets>
								<AttachButton onClick={(e) => switchAssetArea("image")}>
									<img src="images/photo.png" alt="" />
								</AttachButton>
								<AttachButton onClick={(e) => switchAssetArea("video")}>
									<img src="images/video.png" alt="" />
								</AttachButton>
							</AttachAssets>
							<PostButton disabled={!editText ? true : false}>
								<button onClick={(event) => postArticle(event)}>Post</button>
							</PostButton>
						</ShareCreations>
					</Content>
				</Container>
			)}
		</>
	);
};
const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 999999;
	background-color: rgba(0, 0, 0, 0.8);
	animation: fadeIn 0.5s;
`;
const Content = styled.div`
	max-width: 100%;
	background: white;
	position: relative;
	max-height: 90%;
	top: 52px;
	overflow: initial;
	display: flex;
	flex-direction: column;
	z-index: 20000;
	border-radius: 5px;
	overflow-y: scroll;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 16px 26px;
	align-items: center;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.6);
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	button {
		width: 38px;
		height: 38px;
		background: transparent;

		box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0/20%);
		color: rgba(0, 0, 0, 0.6);
	}
`;
const SharedContent = styled.div`
	display: flex;
`;
const UserInfo = styled.div`
	display: flex;
	align-items: center;
	padding: 5px 15px;
	img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}
	span {
		font-weight: 600;
		margin-left: 5px;
	}
`;
const ShareCreations = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
`;
const AttachAssets = styled.div`
	display: flex;
	padding: 5px;
	margin-top: 20px;
`;
const AttachButton = styled.div`
	padding: 0 2px;
	:first-child {
		img {
			height: 24px;
			width: 24px;
		}
	}
`;
const PostButton = styled.div`
	margin-left: 20px;
	button {
		width: 70px;
		height: 30px;
		background-color: ${(props) =>
			props.disabled ? "rgba(0,0,0,0.7)" : "#0a66c2"};
		border-radius: 10px;
		color: white;
	}
`;
const EditorArea = styled.div`
	padding: 16px 24px;
	display: flex;
	flex-direction: column;
	textarea {
		width: 80%;
		height: 100px;
		resize: none;
		border: 1px solid rgba(0, 0, 0, 0.4);
		margin-bottom: 20px;
	}
	input {
		font-size: 16px;
		margin-bottom: 10px;
	}
`;
const UploadedImage = styled.div`
	display: flex;
	flex-direction: column;
	img {
		max-width: 40%;
		max-height: 200px;
		margin-bottom: 25px;
	}
`;
const Video = styled.div`
	width: 100%;
	height: auto;
`;

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		postArticle: (payload) => dispatch(postArticleAPI(payload)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(PostModel);
