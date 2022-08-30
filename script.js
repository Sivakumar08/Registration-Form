function submit_details(){
    let firstNameIp=document.getElementById('first-name').value
    let lastNameIp=document.getElementById('last-name').value
    let emailIp=document.getElementById('email').value
    let phoneIp=document.getElementById('phone').value
    let BatchIp=document.getElementById('Batch').value
    let ModuleIp=document.getElementById('Module').value
    let checkIp=document.getElementById('check').checked

    let error=false
    if(firstNameIp.length>=3){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
    }
    else{
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
        error=true
    }

    if(lastNameIp.length>=3){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
    }

    if(emailIp && 
        emailIp.includes('@')&&
        emailIp.includes('.') && 
        (emailIp.lastIndexOf('.')<=emailIp.length-3) &&
        emailIp.indexOf('@')!==0
        ){
            document.getElementById('email-valid').style.display='block'
            document.getElementById('email-invalid').style.display='none'
        }
        else{
            error=true
            document.getElementById('email-invalid').style.display='block'
            document.getElementById('email-valid').style.display='none'
        }


        var phnno = /^\d{10}$/;
        if(phoneIp.match(phnno)){
            document.getElementById('phone-valid').style.display='block'
            document.getElementById('phone-invalid').style.display='none'
        }
        else{
            error=true
            document.getElementById('phone-invalid').style.display='block'
            document.getElementById('phone-valid').style.display='none'
        }

        if(BatchIp){
            document.getElementById('Batch-valid').style.display='block'
            document.getElementById('Batch-invalid').style.display='none'
        }
        else{
            document.getElementById('Batch-invalid').style.display='block'
            document.getElementById('Batch-valid').style.display='none'
            error=true
        }
        if(ModuleIp){
            document.getElementById('Module-valid').style.display='block'
            document.getElementById('Module-invalid').style.display='none'
        }
        else{
            document.getElementById('Module-invalid').style.display='block'
            document.getElementById('Module-valid').style.display='none'
            error=true
        }

        if(checkIp==false){
            error=true
            document.getElementById('check-box-invalid').style.display='block'
        }
        else{
            document.getElementById('check-box-invalid').style.display='none'
            
        }

        if(error==false){
            window.alert('Your details have been saved sucessfully')
            document.getElementById('first-name').value=''
            document.getElementById('last-name').value=''
            document.getElementById('email').value=''
            document.getElementById('phone').value=''
            document.getElementById('Batch').value='None'
            document.getElementById('Module').value='None'
            document.getElementById('check').checked=''
    
            document.getElementById('first-name-valid').style.display='none'
            document.getElementById('last-name-valid').style.display='none'
            document.getElementById('email-valid').style.display='none'
            document.getElementById('phone-valid').style.display='none'
            document.getElementById('Batch-valid').style.display='none'
            document.getElementById('Module-valid').style.display='none'
            document.getElementById('check-box-invalid').style.display='none'
        }
}