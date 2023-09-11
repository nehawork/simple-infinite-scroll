import { getRequest } from "./api-client.js";
import { renderPostComments } from "./dom-service.js";

const getComments = (pageNumber) => {
  document.getElementById("loadingDiv").style.visibility = "visible";
  document.getElementById("currentPage").innerHTML = pageNumber;

  getRequest(`posts/${pageNumber}/comments`)
    .then((response) => {
      renderPostComments(response.data);
      document.getElementById("loadingDiv").style.visibility = "hidden";
    })
    .catch(() => {
      window.alert("ERROR!");
    });
};

export { getComments };
