// 處理表單
function handleFormSubmit(event) {
  event.preventDefault();

  const formDataObject = new FormData(event.target);
  const formData = Object.fromEntries(formDataObject.entries());
  console.log(formData);

  document.getElementsByClassName("contact-form")[0].reset();
}

// 處理捲動時的內邊距
function handleScrollPadding() {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;

  document.documentElement.style.setProperty("--scroll-padding", headerHeight + "px");
}

// 處理整個網頁渲染完之後，要呼叫哪一些方法
function handleOnload() {
  handleScrollPadding();
  // 監聽視窗被調整時，呼叫 handleScrollPadding() 方法
  window.addEventListener("resize", handleScrollPadding, false);
}

// 整個網頁渲染完之後，呼叫 handleOnload() 方法
window.onload = handleOnload();
