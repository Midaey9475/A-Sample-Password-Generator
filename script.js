// Extracting each of the ids and class into variables
const generatePass = document.querySelector('.generatedPass')
const passLength = document.getElementById('passLength')
const upCase = document.getElementById('chkUppercase')
const lwCase = document.getElementById('chkLowercase')
const num = document.getElementById('chkNumber')
const symbol = document.getElementById('chkSymbol')
const passGenerationBtn = document.getElementById('generateBtn')

// AddEventListener
passGenerationBtn.addEventListener('click' , ()=>{
    //Storing the random values for the passwords
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const number = '1234567890'
    const symbols = '~!@#$%^&*()-_+|?<>.,'

    // Validating the string object values to include in the password
    let a = ''
    if (upCase.checked){a += upperCase} //+= adds/concatenate all uppercase to the empty
    if (lwCase.checked){a += lowercase} //This adds/concatenate all lowercase to the initial values
    if (num.checked){a += number}   //This adds/concatenate all number to the initial values
    if (symbol.checked){a += symbols}   //This adds/concatenate all symbols to the initial values
    if (a === ''){alert `choose one of the cases`}
    // Creating the random password
    let password = ''
    // using a loop to generate the length of the number
    for (i = 0 ; i < passLength.value ; i = i+1){
        password += a.charAt(Math.ceil(Math.random() * a.length))
        // The above generate random value from the object with respect to the length inputed
    }           //charAt will select a value from a string object at a particular index
    generatePass.value = password

    if(passLength.value === ''){alert `Length value is empty`}
    if(Number(passLength.value) > 15){
        alert `Passcode cannot be more than 15`
        generatePass.value = ``
        passLength.value = ''
    }
})
// == Command to excecute password copy
const copyPass = document.getElementById('copyPass')
copyPass.addEventListener('click' , ()=>{
    // == getting the input field where the password is generated
    const passInput = document.querySelector('.generatedPass').value
    navigator.clipboard.writeText(passInput) // This copies the password from the input field
    .then(()=>{alert('Password successfully copied to clipboard')}) // This alert the user of successful copied password
    .catch((err)=>{alert('copy password fail'); console.error(err);})   // This is in case of an error in copying the password
})
