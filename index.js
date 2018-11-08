window.windowName = "outer window";

window.hello = function () {
  alert("Hello, " + window.windowName + " & " + eval("window").windowName);
};
