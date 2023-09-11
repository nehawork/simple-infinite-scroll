const renderPostComments = (data) => {
  const mainPage = document.getElementById("mainPage");

  if (mainPage) {
    data.forEach((comment) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";

      const postName = document.createElement("div");
      postName.className = "name";
      postName.innerHTML = comment.name;
      cardElement.appendChild(postName);

      const postEmail = document.createElement("div");
      postEmail.className = "email";
      postEmail.innerHTML = comment.email;
      cardElement.appendChild(postEmail);

      const postBody = document.createElement("div");
      postBody.className = "body";
      postBody.innerHTML = comment.body;
      cardElement.appendChild(postBody);

      mainPage.appendChild(cardElement);
    });
  }
};

export { renderPostComments };
