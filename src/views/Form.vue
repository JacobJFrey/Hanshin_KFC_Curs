<template>
  <div class="about">
        <h5>Legal Disclaimer</h5>
      
        <p class="fine1">If you or a loved one has suffered from the Curse of the Colonel, you may to be entitled to emotional compensation. 
        'the Colonel' is a rare curse linked to fried chicken exposure. 
        Exposure to fried chicken in Japanese KFCs or Baseball Stadia may put you at risk. 
        Please fill out the following form today to get a free consultation and emotional information packet.</p>
<br>
<div class='outerBox'>
<form action="https://localhost:3000/api/users/login" method="POST">
    <h4>Curse Exposure Assessment Form</h4>
    Please fill the following form to the best of your curse addled abilities:<br><br>
    
    <label for="useName">Full Legal Name</label>
    <input name="userName" type="text" required/><br>
    
    <label for="emailAddress">Full Legal Email</label>
    <input name="emailAddress" type="email" required/><br>

    <label for="DOBirth">Select Your Legal Date of Birth</label>
    <input name="DOBirth" type="date"/><br><br>

    <label for="favouriteColour">What Color Do You 'Think' You Like</label>
    <input name="favouriteColour" type="color"/><br>

    <label for="favouriteNumb">Choose Your Least Hated Number</label>
    <input name="favouriteNumb" type="number"/><br>

    <br>
    <h5>TO SUBMIT THIS FORM, YOU MUST CHECK THE FOLLOWING BOXES</h5>
    <p class="fine1">
    <label for="isValid">THE DATA IS ACCURATE TO THE BEST OF MY CURSE ADDLED ABILITIES: </label>
    <input name="isValid" type="checkbox" required/><br>

    <label for="isFreeWill">I AM NOT UNDER DURESS BY ANY KFC ENTITIES OR THEIR REPRESENTATIVES:</label>
    <input name="isFreeWill" type="checkbox" required/><br>
    </p>

    <input name="Submit" type="submit">
    <br>
    <span class='fine1'> NOTICE: SUBMIT does not actually connect anywhere. </span>
</form>
</div>
  </div>
</template>
<script>
export default {
  name: "About",
}

</script>

<style>

.outerBox {
  display: flex;
  justify-content: center;
}

form {
    background: linear-gradient(#f5d4b7, #fff1e2);
    margin-top: 15px;
    border: 5px solid #a3080c;
    border-radius: 25px;
    padding: 10px;
    width: 80%;
}

input {
    margin: 10px 0px 10px 0px;
}

.fine1 {
    font-size: 12px;
    font-weight: bolder;
}

</style>