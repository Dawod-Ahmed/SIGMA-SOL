
const companyData={
    address:`Office 1 53 South Street Bishop Stortford CM23 3AG`,
    phone:{num1:"+44 7774 712888",num2:"+44 1279 248904"},    email:"hello@sigmasol.co.uk",
    aboutSigmasol:"SigmaSol was established in January 2019 with a mission to bring dexterity to little and expansive organizations utilizing cutting-edge innovation."

}



 document.getElementsByClassName('comp_address')[0].innerHTML = companyData.address
 document.getElementsByClassName('comp_num1')[0].innerHTML = companyData.phone.num1
 document.getElementsByClassName('comp_num2')[0].innerHTML = companyData.phone.num2
 document.getElementsByClassName('comp_email')[0].innerHTML = companyData.email
document.getElementsByClassName('aboutSigmasol')[0].innerHTML = companyData.aboutSigmasol
