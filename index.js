class PaymentTerminal {
    #ones = 10;
    #fives = 10;
    #tens = 10;
    #twenties = 10;
    #fifties = 10;
    
    #getTotalAmountAvailable() {
        return 1*this.#ones + 5*this.#fives + 10*this.#tens + 20*this.#twenties + 50*this.#fifties
    }
    
    #getChangeAvailable(changeRequired) {
        if (changeRequired < 5) {
            return 1*this.#ones;
        }
        if (changeRequired < 10) {
            return 1*this.#ones + 5*this.#fives;
        }
        if (changeRequired < 20) {
            return 1*this.#ones + 5*this.#fives + 10*this.#tens;
        }
        if (changeRequired < 50) {
            return 1*this.#ones + 5*this.#fives + 10*this.#tens + 20*this.#twenties;
        }
        if (changeRequired < 50) {
            return 1*this.#ones + 5*this.#fives + 10*this.#tens + 20*this.#twenties;
        }
        return 1*this.#ones + 5*this.#fives + 10*this.#tens + 20*this.#twenties + 50*this.#fifties
    }
    
    #subtractOnes(subtractBy) {
        this.#ones = this.#ones - subtractBy;
    }
    
    #subtractFives(subtractBy) {
        this.#fives = this.#fives - subtractBy;
    }
    
    #subtractTens(subtractBy) {
        this.#tens = this.#tens - subtractBy;
    }
    
    #subtractTwenties(subtractBy) {
        this.#twenties = this.#twenties - subtractBy;
    }
    
    #subtractFifties(subtractBy) {
        this.#fifties = this.#fifties - subtractBy;
    }
    
    
    processChange(changeRequired) {
        if (changeRequired <= 0) {
            const distributedChange = {}
            console.log('No change required')
            return distributedChange;
        }
        
        if (changeRequired < 5) {
            const distributedChange = {}
            
            const changeAvailable = this.#getChangeAvailable(changeRequired);
            if (changeAvailable < changeRequired) {
                console.log('Not enough change!')
                return;
            }
            
            let changeLeftToProcess = changeRequired
            let onesRequired = 0;
            
            onesRequired = changeLeftToProcess;
            changeLeftToProcess -= onesRequired;
            
            console.log('Change left to process ', changeLeftToProcess);
            
            
            console.log('TAA ', this.#getTotalAmountAvailable());
            this.#subtractOnes(onesRequired);
            console.log('Curr TAA ', this.#getTotalAmountAvailable());
            
            distributedChange.ones = onesRequired;
            return distributedChange;
        }
        
        if (changeRequired < 10) {
            const distributedChange = {}
            
            const changeAvailable = this.#getChangeAvailable(changeRequired);
            if (changeAvailable < changeRequired) {
                console.log('Not enough change!')
                return;
            }
            
            let changeLeftToProcess = changeRequired
            let fivesRequired = 0;
            let onesRequired = 0;
            
            fivesRequired = 1;
            changeLeftToProcess -= 5;
            
            if (changeLeftToProcess > 0) {
                onesRequired = changeLeftToProcess;
                changeLeftToProcess -= onesRequired;   
            }
            
            console.log('Change left to process ', changeLeftToProcess);
            
            console.log('TAA ', this.#getTotalAmountAvailable());
            this.#subtractFives(fivesRequired);
            this.#subtractOnes(onesRequired);
            console.log('Curr TAA ', this.#getTotalAmountAvailable());
            
            distributedChange.fives = fivesRequired;
            distributedChange.ones = onesRequired;
            return distributedChange;
        }
        
        if (changeRequired < 20) {
            const distributedChange = {}
            
            const changeAvailable = this.#getChangeAvailable(changeRequired);
            if (changeAvailable < changeRequired) {
                console.log('Not enough change!')
                return;
            }
            
            let changeLeftToProcess = changeRequired
            let tensRequired = 0;
            let fivesRequired = 0;
            let onesRequired = 0;
            
            tensRequired = 1;
            changeLeftToProcess -= 10;
            
            if (changeLeftToProcess >= 5) {
                fivesRequired = 1;
                changeLeftToProcess -= 5
            }
            
            if (changeLeftToProcess > 0) {
                onesRequired = changeLeftToProcess;
                changeLeftToProcess -= onesRequired;   
            }
            
            console.log('Change left to process ', changeLeftToProcess);
            
            console.log('TAA ', this.#getTotalAmountAvailable());
            this.#subtractTens(tensRequired);
            this.#subtractFives(fivesRequired);
            this.#subtractOnes(onesRequired);
            console.log('Curr TAA ', this.#getTotalAmountAvailable());
            
            distributedChange.tens = tensRequired;
            distributedChange.fives = fivesRequired;
            distributedChange.ones = onesRequired;
            return distributedChange;
        }
        
        if (changeRequired < 50) {
            const distributedChange = {}
            
            const changeAvailable = this.#getChangeAvailable(changeRequired);
            if (changeAvailable < changeRequired) {
                console.log('Not enough change!')
                return;
            }
            
            let changeLeftToProcess = changeRequired
            let twentiesRequired = 0;
            let tensRequired = 0;
            let fivesRequired = 0;
            let onesRequired = 0;
            
            if (changeLeftToProcess >= 40) {
                twentiesRequired = 2;
                changeLeftToProcess -= 40
            };
            
            if (changeLeftToProcess >= 30) {
                twentiesRequired = 1;
                changeLeftToProcess -= 20
            };
            
            if (changeLeftToProcess >= 20) {
                twentiesRequired = 1;
                changeLeftToProcess -= 20
            };
            
            if (changeLeftToProcess >= 10) {
                tensRequired = 1;
                changeLeftToProcess -= 10
            };
            
            if (changeLeftToProcess >= 5) {
                fivesRequired = 1;
                changeLeftToProcess -= 5
            }
            
            if (changeLeftToProcess > 0) {
                onesRequired = changeLeftToProcess;
                changeLeftToProcess -= onesRequired;   
            }
            
            console.log('Change left to process ', changeLeftToProcess);
            
            console.log('TAA ', this.#getTotalAmountAvailable());
            this.#subtractTwenties(twentiesRequired);
            this.#subtractTens(tensRequired);
            this.#subtractFives(fivesRequired);
            this.#subtractOnes(onesRequired);
            console.log('Curr TAA ', this.#getTotalAmountAvailable());
            
            distributedChange.twenties = twentiesRequired;
            distributedChange.tens = tensRequired;
            distributedChange.fives = fivesRequired;
            distributedChange.ones = onesRequired;
            return distributedChange;
        }
        
        if (changeRequired >= 50) {
            const distributedChange = {}
            
            const changeAvailable = this.#getChangeAvailable(changeRequired);
            if (changeAvailable < changeRequired) {
                console.log('Not enough change!')
                return;
            }
            
            let changeLeftToProcess = changeRequired
            let fiftiesRequired = 0;
            let twentiesRequired = 0;
            let tensRequired = 0;
            let fivesRequired = 0;
            let onesRequired = 0;
            
            fiftiesRequired = Math.floor(changeRequired / 50);
            changeLeftToProcess -= fiftiesRequired * 50;
            
            if (changeLeftToProcess >= 40) {
                twentiesRequired = 2;
                changeLeftToProcess -= 40
            };
            
            if (changeLeftToProcess >= 30) {
                twentiesRequired = 1;
                changeLeftToProcess -= 20
            };
            
            if (changeLeftToProcess >= 20) {
                twentiesRequired = 1;
                changeLeftToProcess -= 20
            };
            
            if (changeLeftToProcess >= 10) {
                tensRequired = 1;
                changeLeftToProcess -= 10
            };
            
            if (changeLeftToProcess >= 5) {
                fivesRequired = 1;
                changeLeftToProcess -= 5
            }
            
            if (changeLeftToProcess > 0) {
                onesRequired = changeLeftToProcess;
                changeLeftToProcess -= onesRequired;   
            }
            
            console.log('Change left to process ', changeLeftToProcess);
            
            console.log('TAA ', this.#getTotalAmountAvailable());
            this.#subtractFifties(fiftiesRequired);
            this.#subtractTwenties(twentiesRequired);
            this.#subtractTens(tensRequired);
            this.#subtractFives(fivesRequired);
            this.#subtractOnes(onesRequired);
            console.log('Curr TAA ', this.#getTotalAmountAvailable());
            
            distributedChange.fifties = fiftiesRequired;
            distributedChange.twenties = twentiesRequired;
            distributedChange.tens = tensRequired;
            distributedChange.fives = fivesRequired;
            distributedChange.ones = onesRequired;
            return distributedChange;
        }        
        
    }
}

const terminal = new PaymentTerminal();
console.log(terminal.processChange(389));
