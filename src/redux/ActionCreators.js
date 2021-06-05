import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import { actionTypes } from "react-redux-form";

export const fetchCampsites = () => (dispatch) => {
  dispatch(campsitesLoading());

  return fetch(baseUrl + "campsites")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((campsites) => dispatch(addCampsites(campsites)))
    .catch((error) => dispatch(campsitesFailed(error.message)));
};

// export const fetchCampsites = () => (dispatch) => {
//   dispatch(campsitesLoading());

//   return fetch(baseUrl + "campsites")
//     .then((response) => response.json)
//     .then((campsites) => dispatch(addCampsites(campsites)));
// };

export const campsitesLoading = () => ({
  type: ActionTypes.CAMPSITES_LOADING,
});

export const campsitesFailed = (errMess) => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errMess,
});

export const addCampsites = (campsites) => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites,
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (campsiteId, rating, author, text) => (dispatch) => {
  const newComment = {
    campsiteId,
    rating,
    author,
    text,
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("post comment", error.message);
      alert("Your comment could not be posted/nError:" + error.message);
    });
};

export const fetchPromotions = () => (dispatch) => {
  dispatch(promotionsLoading());

  return fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((promotions) => dispatch(addPromotions(promotions)))
    .catch((error) => dispatch(promotionsFailed(error.message)));
};

// export const fetchPromotions = () => (dispatch) => {
//   dispatch(promotionsLoading());

//   return fetch(baseUrl + "promotions")
//     .then((response) => response.json)
//     .then((promotions) => dispatch(addPromotions(promotions)));
// };

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = (errMess) => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errMess,
});

export const addPromotions = (promotions) => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions,
});

export const addPartners = (partners) => ({
  type: ActionTypes.ADD_PARTNERS,
  payload: partners,
});

export const failedPartners = (errMess) => ({
  type: ActionTypes.FAILED_PARTNERS,
  payload: errMess,
});

export const loadingPartners = () => ({
  type: ActionTypes.LOADING_PARTNERS,
});

export const fetchPartners = () => (dispatch) => {
  dispatch(loadingPartners());

  return fetch(baseUrl + "partners")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addPartners(response)))
    .catch((response) => dispatch(failedPartners(response.message)));
};

// export const postComment = (campsiteId, rating, author, text) => (dispatch) => {
//   const newComment = {
//     campsiteId,
//     rating,
//     author,
//     text,
//   };
//   newComment.date = new Date().toISOString();

//   return fetch(baseUrl + "comments", {
//     method: "POST",
//     body: JSON.stringify(newComment),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then(
//       (response) => {
//         if (response.ok) {
//           return response;
//         } else {
//           const error = new Error(`Error ${response.status}: ${response.statusText}`);
//           error.response = response;
//           throw error;
//         }
//       },
//       (error) => {
//         throw error;
//       }
//     )
//     .then((response) => response.json())
//     .then((response) => dispatch(addComment(response)))
//     .catch((error) => {
//       console.log("post comment", error.message);
//       alert("Your comment could not be posted/nError:" + error.message);
//     });
// };

export const postFeedback = (feedback) => (dispatch) => {
  return (
    fetch(baseUrl + "feedback", {
      method: "POST",
      body: JSON.stringify(feedback),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response, alert(`Thank you for your feedback.` + feedback);
          } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
          }
        },
        (error) => {
          const errMess = new Error(error.message);
          throw errMess;
        }
      )
      .then((response) => response.json())
      // .then((response) => dispatch(addFeedback(response)))
      .catch((error) => {
        console.log("post feedback", error.message);
        alert("Your feedback could not be posted Error:" + error.message);
      })
  );
};

// export const addFeedback = (feedback) => ({
//   type: ActionTypes.ADD_FEEDBACK,
//   payload: feedback,
// });
