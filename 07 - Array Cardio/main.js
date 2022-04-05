 // ## Array Cardio Day 2
 const people = [{
     name: `Wes`,
     year: 1988
   },
   {
     name: `Kait`,
     year: 1986
   },
   {
     name: `Irv`,
     year: 1970
   },
   {
     name: `Lux`,
     year: 2015
   }
 ];

 const comments = [{
     text: `Love this!`,
     id: 523423
   },
   {
     text: `Super good`,
     id: 823423
   },
   {
     text: `You are the best`,
     id: 2039842
   },
   {
     text: `Ramen is my fav food ever`,
     id: 123523
   },
   {
     text: `Nice Nice Nice!`,
     id: 542328
   }
 ];
 console.log(Object.keys({
   people
 })[0]);
 console.table(people);

 console.log(Object.keys({
   comments
 })[0]);
 console.table(comments);

 currentDate = new Date
 const Over19 = (people) => {
   // Array.prototype.some() // is at least one person 19 or older?
   const result = people.some(person => (currentDate.getFullYear() - person.year) > 19)
   return result ? `Yes, there are people over 19 years old` : `No, there are no people over 19 years old`
 }

 const Over19All = (people) => {
   // Array.prototype.every() // is everyone 19 or older?
   const result = people.every(person => (currentDate.getFullYear() - person.year) > 19)
   return result ? `Yes, everyone is over 19 years old` : `No, everyone is not over 19 years old`
 }

 const findCommentID = (comments, id) => {
   // Array.prototype.find() finds the comment via the ID
   const result = comments.find(comment => comment.id === id);
   return typeof result !== `undefined` || typeof result !== `null` ? `The comment, "${result.text}" was found` : `Comment with ID ${result.id} was not found`
 }

 const findCommentText = (comments, text) => {
   // Array.prototype.findIndex() finds the comment via the text
   const result = comments.findIndex(comment => comment.text === text)
   return result >= 0 ? `The comment "${comments[result].text}", was found on index: ${result}` : `Comment with a text of "${text}" was not found`
 }
 // Array.prototype.findIndex()
 const findAndDelete = (comments, id) => {
   // Find the comment with the provided ID and delete it
   const index = comments.findIndex(comment => comment.id === id)
   const removed = comments.splice(index, 1)
   if (index >= 0) {
     console.table(comments);
     return `"${removed[0].text}" was removed from ${Object.keys({comments})[0]}`
   } else {
    return `Comment with an ID of "${id}" was not found`
   }
 }

 const init = () => {
   console.log(Over19(people));
   console.log(Over19All(people));
   console.log(findCommentID(comments, 823423));
   console.log(findCommentText(comments, "Ramen is my fav food ever"));
   console.log(findAndDelete(comments, 542328));
 }

 window.addEventListener("load", init);
