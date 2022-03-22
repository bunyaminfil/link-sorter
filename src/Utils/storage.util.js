export function getAllLinks() {
  const links = localStorage.getItem("links")
    ? JSON.parse(localStorage.getItem("links"))
    : [];
  return links;
}

export function saveLink(data) {
  const links = getAllLinks();
  links.push(data);
  localStorage.setItem("links", JSON.stringify(links));
}

export function removeLink(value) {
  const links = getAllLinks();
  let filteredArray = links.filter((item) => item.link !== value);
  localStorage.setItem("links", JSON.stringify(filteredArray));
}

export function errorLink(value) {
  const links = getAllLinks();
  let error = links.some((item) => item.link === value);
  return error;
}

export function upVote(item) {
  const links = getAllLinks();
  const index = links.map(function(x) {return x.link; }).indexOf(item.link);

  let tempState = [...links];
  let tempElement = { ...tempState[index] };
  tempElement.voteCount = tempElement.voteCount+1;
  tempState[index] = tempElement;
  localStorage.setItem("links",JSON.stringify(tempState))
}

export function downVote(item) {
  const links = getAllLinks();
  const index = links.map(function(x) {return x.link; }).indexOf(item.link);

  let tempState = [...links];
  let tempElement = { ...tempState[index] };
  if(tempElement.voteCount == 0){
    tempElement.voteCount = 0;
  }else{
    tempElement.voteCount = tempElement.voteCount-1;
  }
  tempState[index] = tempElement;
  localStorage.setItem("links",JSON.stringify(tempState))
}

export function refreshPage() {
  window.location.reload(false);
}