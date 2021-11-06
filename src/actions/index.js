import db, { auth, provider, storage } from "../firebase";
import { SET_USER, SET_LOADING, SET_ARTICLES } from "./actionTypes";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    user: payload,
  };
};
export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    loading: payload,
  };
};

export function signInApi() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
        console.log(payload.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export const postArticleAPI = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    //const load = loading;
    //console.log(load);

    if (payload.image !== "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`progress: ${progress}%`);
          }
        },

        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              date: payload.timestamp,
              description: payload.user.email,
              title: payload.user.displayName,
              image: payload.user.photoURL,
            },

            video: payload.video,
            image: downloadURL,
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      dispatch(setLoading(true));
      db.collection("articles").add({
        actor: {
          date: payload.timestamp,
          description: payload.user.email,
          title: payload.user.displayName,
          image: payload.user.photoURL,
        },
        video: payload.video,
        image: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
};

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export const signOut = () => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(setUser(null));
    });
  };
};
export const getFromRed = (payload) => {
  return {
    type: SET_ARTICLES,
    payload: payload,
  };
};
export function getArticles() {
  return (dispatch) => {
    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        let payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getFromRed(payload));
      });
  };
}
export default postArticleAPI;
