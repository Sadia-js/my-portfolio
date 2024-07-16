function handlingContact(event){
    event.preventDefault();
    const nameOption = event.target.fname.value;
    console.log(nameOption);
    const emailAddress = event.target.email.value;
    console.log(emailAddress);
    const messageOption = event.target.message.value;
    console.log(messageOption);
} 

