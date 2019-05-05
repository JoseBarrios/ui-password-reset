window.OBJECT_ID_ELEMENT = document.querySelector("meta[name='_objectID']");
window.OBJECT_ID = OBJECT_ID_ELEMENT.getAttribute("content");

window.CSRF_ELEMENT = document.querySelector("meta[name='_csrf']");
window.CSRF_TOKEN = CSRF_ELEMENT.getAttribute("content");

window.HIT_DRAFTS_URL =  "/HIT/drafts";
window.HIT_PUBLISHED_URL = "/HIT/published";

window.DELETE = "DELETE";
window.PATCH = "PATCH";
window.POST = "POST";
