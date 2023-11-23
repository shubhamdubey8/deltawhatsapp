const mongoose = require ("mongoose");
const Chat = require("./models/chat.js");


main()
.then(()=> {
    console.log("connection succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats =[
    {
        from:"neha",
        to: "preeti",
        msg:"send me notes for the exam",
        created_at: new Date(),

    },
    {
        from:"rohit",
        to: "mohit",
        msg:"teach me js callback",
        created_at: new Date(),

    },
    {
        from:"anil",
        to: "sunil",
        msg:"all the best for interview",
        created_at: new Date(),

    },
    {
        from:"ramesh",
        to: "suresh",
        msg:"call you later",
        created_at: new Date(),

    },
    {
        from:"sony",
        to: "tony",
        msg:"bring me some fruits",
        created_at: new Date(),

    },

];

    Chat.insertMany(allChats);

















