const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const app = express();
const FieldValue = require('firebase-admin').firestore.FieldValue;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

admin.initializeApp(functions.config().firebase);


let db = admin.firestore();


exports.recordShare = functions.https.onRequest(async (req, res) => {

  var factId = req.body.factId;
  console.log(factId);
  var shareCounterRef = db.collection('facts').doc(factId);
  shareCounterRef.update({ shares: FieldValue.increment(1) }); 
  
});


app.get('/:id', async (req, res) => {

  let id = req.params.id;
  let facts = await db.collection('facts').orderBy('created', 'desc').get()
    	.then(snapshot => {
        let factList = [];

            snapshot.forEach(doc => {
            factList.push({
                created: doc.data().created,
                id: doc.id,
                fact: doc.data().fact,
                external: doc.data().external,
                random:Math.floor((Math.random()*1000000)+1)
            })
          });
            factList.sort(function(a, b){
              return a.random - b.random;
            });
            return factList; 
        })
        .catch(err => {
        console.log("ERROR ERROR LOOK AT ME:" + err);
        return [err];
        });

    let sharedFact = await db.collection('facts').doc(id).get()
    .then(doc => {
        let sharedFact = [];
        if(doc.exists)
        sharedFact.push({
            created: doc.data().created,
                id: doc.id,
                fact: doc.data().fact,
                external: doc.data().external,
                random:1
        });
        return sharedFact
        })
        .catch(err => {
        console.log("ERROR ERROR LOOK AT ME:" + err);
        return [err];
    });

      res.render('shared-post',{
        description : "risqué nonsense for everybody",
        title: "braindump shared",
        facts: facts,
        sharedId: id,
        sharedFact: sharedFact,
      });
      //res.send(challengeRequested);
});

app.get('/facts/:category', async (req, res) => {
  let category = req.params.category;
  let facts = await db.collection('facts').where('category', '==', category).get()
    	.then(snapshot => {
        let factList = [];

        snapshot.forEach(doc => {
          factList.push({
            created: doc.data().created,
            id: doc.id,
            fact: doc.data().fact,
            external: doc.data().external,
            categories: doc.data().category,
            random:Math.floor((Math.random()*1000000)+1)
          });
          
        });
        factList.sort(function(a, b){
          return a.random - b.random;
        });

        return factList; 
             
    })
    .catch(err => {
      console.log("ERROR ERROR LOOK AT ME:" + err);
      return [err];
     });

     /// get categories
     let categories = await db.collection('categories').get()
    	.then(snapshot => {
        let categoryList = [];

        snapshot.forEach(doc => {
          categoryList.push({
            category: doc.data().category,
            id: doc.id
          }); 
        });

        return categoryList; 
             
    })
    .catch(err => {
      console.log("ERROR ERROR LOOK AT ME:" + err);
      return [err];
     });

     /// spit something out

    res.render('index',{
      description : "risqué nonsense for everybody",
      title: "braindump",
      facts: facts,
      categories: categories
    });
    
   //res.send(challenges);
});


app.get('/', async (req, res) => {
  let facts = await db.collection('facts').orderBy('created', 'desc').get()
    	.then(snapshot => {
        let factList = [];

        snapshot.forEach(doc => {
          factList.push({
            created: doc.data().created,
            id: doc.id,
            fact: doc.data().fact,
            external: doc.data().external,
            categories: doc.data().category,
            random:Math.floor((Math.random()*1000000)+1)
          });
          
        });
        factList.sort(function(a, b){
          return a.random - b.random;
        });

        return factList; 
             
    })
    .catch(err => {
      console.log("ERROR ERROR LOOK AT ME:" + err);
      return [err];
     });

     /// get categories
     let categories = await db.collection('categories').get()
    	.then(snapshot => {
        let categoryList = [];

        snapshot.forEach(doc => {
          categoryList.push({
            category: doc.data().category,
            id: doc.id
          }); 
        });

        return categoryList; 
             
    })
    .catch(err => {
      console.log("ERROR ERROR LOOK AT ME:" + err);
      return [err];
     });

     /// spit something out

    res.render('index',{
      description : "risqué nonsense for everybody",
      title: "braindump",
      facts: facts,
      categories: categories
    });
    
   //res.send(challenges);
});






exports.app = functions.https.onRequest(app);


