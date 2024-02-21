import inquirer from "inquirer";


interface ansType{
    userID:string,
    userPin:number,
    accountType:string,
    transactionType:string,
    amount:number
}

const answers:ansType =await inquirer.prompt([
    {
        type:"input",
        name:"userID",
        message:"Enter user ID"
    },
    {
        type:"number",
        name:"userPin",
        message:"Enter your Pin"

    },
    
    {
        type:"list",
        name:"accountType",
        choices:["Current","Saving"],
        message:"Select your account type",

},
{
    type:"list",
        name:"transactionType",
        choices:["Fast Cash","Withdraw"],
        message:"Select your transaction",
        when(answers) {
            return answers.accountType

        },
     },
     {
        type:"list",
     name:"amount",
choices:["1000","2000","5000","10000"],
     message:"Select your amount",
     when(answers) {
         return answers.transactionType =="Fast Cash"
     },

     },
     {
        type:"number",
     name:"amount",

     message:"Enter your amount",
     when(answers) {
         return answers.transactionType =="Withdraw"
     },

     }




])
if(answers.userID && answers.userPin){
    const balance =Math.floor(Math.random()*1000000);
    
    const EnteredAmount = answers.amount;
    if (balance>=EnteredAmount){
      const remaining=  balance-EnteredAmount;
      console.log("Your Remaining Balance is ", remaining)

    }else {
        console.log("Insufficient Balance")
    }
}
