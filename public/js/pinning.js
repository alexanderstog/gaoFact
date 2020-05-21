

document.querySelectorAll('.pin').forEach(item => {
    console.log("pin clicked");
    item.addEventListener('click', (e) => {
      e.preventDefault();
      //get the index of the clicked pin.
    
      const urlParams = new URLSearchParams(window.location.search);
      var thread = urlParams.get('thread');
      if (!thread){
          thread = (Math.floor(Math.random() * 1000000000)).toString();
      } else {
          // do nothing
      }
      console.log("thread is " + thread);
      //const index = e.target.getAttribute('index');
      const index = 0;
      console.log("pin index = " + index);

      //get the message the user is trying to pin.
      const textAreas = document.getElementsByClassName('share-text');
      var requiredTextArea = textAreas[index];
      const text = requiredTextArea.value;
      console.log("the share text = " + text);
      
      let threadRef = db.collection('threads').doc(thread);

        // Atomically add a new region to the "regions" array field.
        let arrUnion = threadRef.update({
        messages: admin.firestore.FieldValue.arrayUnion(text)
        });
         
        
      });
  });