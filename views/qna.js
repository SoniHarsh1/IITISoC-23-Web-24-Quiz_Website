const startbtn=document.querySelector('.block');
const popupinfo=document.querySelector('.popupinfo');
const body=document.querySelector('body');
startbtn.onclick = ()=>{
      popupinfo.classList.add('active1');
      body.classList.add('body');
};
