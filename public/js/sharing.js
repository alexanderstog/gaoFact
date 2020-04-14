//check whether browser supports webshare api and make decision about what to do
if (navigator.share) {
    console.log("sharing should work on this browser");
    } else {
    $(".share").remove();  // provide a fallback here
    console.log("sharing removed");
    }

    /*$(".title").click(function(){
        html2canvas(document.querySelector("#myCarousel")).then(canvas => {
        document.body.appendChild(canvas)
        });
        
    });*/

// Must be triggered some kind of "user activation"

document.querySelectorAll('.share').forEach(item => {
    console.log("something happening");
    //html2canvas(document.querySelector("#myCarousel")).then(canvas => {
        item.addEventListener('click', async (e) => {

        const text = e.target.getAttribute('shareText');
        const url = "https://gaofact.web.app/" + e.target.getAttribute('link');
        
        
        const shareData = {
            title: 'Lool',
            text: text + '     See more at:',
            url: url
        }

        try {
            await navigator.share(shareData)
            analytics.logEvent('share complete');
        } catch(err) {
            analytics.logEvent('share failed');
        }
        });
});