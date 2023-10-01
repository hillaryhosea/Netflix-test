
document.addEventListener("DOMContentLoaded", function(){
   
        var navLinks = document.querySelectorAll("#features a ");

        var sections =  document.querySelectorAll("#features  article  section ");

        navLinks.forEach(function(link){

            link.addEventListener("click", function(e) {

                e.preventDefault();

                var tergetDataId = this.getAttribute("data");

                sections.forEach(function (section) {

                    section.style.display = "none";

                })

                var targetsection = document.querySelectorAll()

            });
        });
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Get all <a> elements within the navigation
//     var navLinks = document.querySelectorAll('#features a');

//     // Get all <section> elements within the article
//     var articleSections = document.querySelectorAll('#features article section');

//     // Add click event listeners to each <a> element
//     navLinks.forEach(function (link) {
//         link.addEventListener('click', function (event) {
//             event.preventDefault(); // Prevent default link behavior

//             // Get the data-id attribute value of the clicked <a> element
//             var targetDataId = this.getAttribute('data-id');

//             // Hide all article sections
//             articleSections.forEach(function (section) {
//                 section.style.display = 'none';
//             });

//             // Show the article section with the matching data-id
//             var targetSection = document.querySelector('#features article section[data-id="' + targetDataId + '"]');
//             if (targetSection) {
//                 targetSection.style.display = 'block';
//             }
//         });
//     });
// });












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
