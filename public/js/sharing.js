//check whether browser supports webshare api and make decision about what to do
if (navigator.share) {
    console.log("sharing should work on this browser");
    $(".share").show();  
    } else {
    // provide a fallback here
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
        const factId = e.target.getAttribute('factId');
        const shortText = text.substring(0, 20);
        const url = "https://gaofact.web.app/";
        
        const shareData = {
            title: 'Lool',
            text: text + '     See more at:',
            url: url
        }

        try {
            await navigator.share(shareData)
            analytics.logEvent('share complete', {fact: shortText});
            
            
            var sendInfo = {
                "factId":factId
            }
            
            //console.log(sendInfo);
        
            $.ajax({
                url: 'https://us-central1-gaofact.cloudfunctions.net/recordShare',
                type: 'post',
                dataType: 'application/json',
                data: sendInfo
            });

        } catch(err) {
            analytics.logEvent('share failed');
        }
        });
});