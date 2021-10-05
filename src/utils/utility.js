export const makeOptions = (cancelToken = null) => {
  // for protected routes
  const token = localStorage.getItem("token");

  let options = {
    headers: {
      Authorizaton: "Bearer " + token,
    },
    data: null,
  };

  if (cancelToken !== null) {
    options["cancelToken"] = cancelToken;
  }

  return options;
};

export const makePostOptions = (cancelToken = null) => {
  // for protected routes
  const token = localStorage.getItem("token");

  let options = {
    headers: {
      Authorizaton: "Bearer " + token,
    },
  };

  if (cancelToken !== null) {
    options["cancelToken"] = cancelToken;
  }

  return options;
};
