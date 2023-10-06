const tabs = document.querySelectorAll("#features > nav a");
 const tabsContent = document.querySelectorAll("article > section ");
 
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    tabs.forEach((tab) => {
      tab.classList.remove("is-selected");
    });

    tab.classList.add("is-selected");

    tabsContent.forEach((section) => {
      section.classList.remove("is-selected");
    });

    tabsContent.forEach(function (section) {
      if (section.dataset.id === that.dataset.id) {
        section.classList.add("is-selected");
      }
    });

  //   const selectedTabId = tab.dataset.id;
  //   const selectedTabContent = document.querySelector(`#features > article section[data-id="${selectedTabId}"]`);
  //   selectedTabContent.classList.add("is-selected");
  });
});


// $(function() {
//     var tabs = ("#features > nav a");
//     tabs.click(function(e){
//         e.preventDefault();
//         var that = $(this);
//         tabs.removeClass("is-selected");
//         that.addClass ("is-selected");
//         tabsContent.removeClass("is-selected");
//         tabsContent
//          .filter ((i, tab) => $(tab).data("id") ===that.data("id"))
//          .addClass("is-selected");
//     });
// });
