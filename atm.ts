#!/usr/bin/env node
import * as readline from 'readline';
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
r1.question("Enter username: ",(username:string)=>{
    r1.question("Enter password: ",(password:string)=>{
        console.log("Username: "+username+"\nPassword: "+password); 
        let balance:number=20000;
        let choice:string="";
        
        function askQuestion() {
            r1.question("Enter 1 for balance inquiry\nEnter 2 for transaction\nEnter 3 for withdraw\nEnter 4 for fast cash\nEnter 0 for exit \nEnter your choice\n",(answer)=>{
                choice=answer;
                if(choice=="1") {
                    console.log("Your current balance is:"+ balance);
                    askQuestion();
                }
                else if(choice=="2") {
                    r1.question("Enter the amount that you want to transfer",(amount:string)=>{
                        balance+=parseInt(amount);
                        console.log("Transaction is successful! \nYour current balance is"+balance);
                        askQuestion();
                    });
                }
                else if(choice=="3") {
                    r1.question("Enter the amount that you want to withdraw",(amount:string)=>{
                        if(balance<parseInt(amount)) {
                            console.log("You don't have enough balance. Your balance is: "+balance);
                        } else {
                            balance-=parseInt(amount);
                            console.log("You successfully withdraw the amount, Your current balance is: "+balance);
                        }
                        askQuestion();
                    });
                }
                else if(choice=="4") {
                    r1.question("Enter 1 for 100 rupees\nEnter 2 for 1000\nEnter 3 for 10000\nEnter 4 for 100000\n",(amountChoice:string)=>{
                        if(amountChoice=="1") {
                            if(balance<100) {
                                console.log("You don't have enough balance. Your balance is: "+balance);
                            } else {
                                balance-=100;
                                console.log("You successfully withdraw the amount, Your current balance is: "+balance);
                            }
                        } else if(amountChoice=="2") {
                            if(balance<1000) {
                                console.log("You don't have enough balance. Your balance is: "+balance);
                            } else {
                                balance-=1000;
                                console.log("You successfully withdraw the amount, Your current balance is: "+balance);
                            }
                        } else if(amountChoice=="3") {
                            if(balance<10000) {
                                console.log("You don't have enough balance. Your balance is: "+balance);
                            } else {
                                balance-=10000;
                                console.log("You successfully withdraw the amount, Your current balance is: "+balance);
                            }
                        } else if(amountChoice=="4") {
                            if(balance<100000) {
                                console.log("You don't have enough balance. Your balance is: "+balance);
                            } else {
                                balance-=100000;
                                console.log("You successfully withdraw the amount, Your current balance is: "+balance);
                            }
                        }
                        askQuestion();
                    });
                }
                else if(choice=="0") {
                    r1.close();
                }
            });
        }
        askQuestion();
    });
});
