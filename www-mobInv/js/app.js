// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app7  = new Framework7({
  root: '#app', // app7 root element
  theme: 'auto', // Automatic theme detection
  routes: routes,
  workingDoc:null
});

 //Init/Create main view
var mainView = app7.views.create('.view-main', {
  url: '/',
  domCache:true
});

var users=[
  {"id":"1", "name":"anna", pswd:"123"},
  {"id":"2", "name":"borya", pswd:"123"},
  {"id":"3", "name":"vasya", pswd:"123"},
  {"id":"4", "name":"gena", pswd:"123"},
  {"id":"5", "name":"diana", pswd:"123"},
  {"id":"6", "name":"anna1", pswd:"123"},
  {"id":"7", "name":"borya1", pswd:"123"},
  {"id":"8", "name":"vasya1", pswd:"123"},
  {"id":"9", "name":"gena1", pswd:"123"},
  {"id":"10", "name":"diana1", pswd:"123"},
  {"id":"11", "name":"anna2", pswd:"123"},
  {"id":"12", "name":"borya2", pswd:"123"},
  {"id":"13", "name":"vasya2", pswd:"123"},
  {"id":"14", "name":"gena2", pswd:"123"},
  {"id":"15", "name":"diana2", pswd:"123"}
];
//Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  var ligInSuccess=false;
  for(var k in users){
    if(users[k].name==username){
      if(users[k].pswd==password)ligInSuccess=true;
      break;
    }
  }
  if(!ligInSuccess){
    app7.dialog.alert("Неверное имя или пароль","", function(){
      $$('#my-login-screen [name="username"]').val("");
      $$('#my-login-screen [name="password"]').val("");
    });
  }else
    mainView.router.navigate('/main_content/');
});

var rowNum=1;

function createTableRow(barcode){
  if(!barcode){
    app7.dialog.alert("Не удалось считать код", "Внимание");
    return;
  }
  //alert("Не удалось считать код");
  if(document.getElementById(barcode)){
    document.getElementById(barcode).innerText=parseInt(document.getElementById(barcode).innerText)+1;
    document.getElementById("barCodeInput").value='';
    setTotalQty();
    return;
  }
  var mainTable=document.getElementById('inventoryTable');
  var tbody=document.createElement('tr');

  var trHigher=document.createElement('tr');
  var tdRowNum=document.createElement('td');
  var tdProdName=document.createElement('td');

  tdRowNum.innerText=rowNum.toString();
  tdRowNum.className='text-centered';


  tdProdName.innerText="Товар со штрих-кодом"+barcode;
  tdProdName.className="blue-text";
  trHigher.appendChild(tdRowNum);
  trHigher.appendChild(tdProdName);

  var trLower=document.createElement('tr');
  var tdBarCode=document.createElement('td');
  var tdUm=document.createElement('td');
  var tdRef=document.createElement('td');
  var tdReal=document.createElement('td');
  tdReal.id=barcode;
  tbody.onclick=  function(){
    showRealQtyFunction(tdReal, tdReal.innerText.trim(),tdProdName.innerText);
    if(document.getElementById('clickedTableRow')) document.getElementById('clickedTableRow').id="";
    tbody.id="clickedTableRow";
  };

  tdRowNum.style.width=(document.getElementById('num_td').offsetWidth-11) + "px";
  tdBarCode.style.width=(document.getElementById('code_td').offsetWidth-11) + "px";
  tdUm.style.width=(document.getElementById('um_td').offsetWidth-11) + "px";
  tdRef.style.width=(document.getElementById('doc_qty').offsetWidth-11) + "px";
  tdRef.style.textAlign="center";
  tdReal.style.width=(document.getElementById('real_qty').offsetWidth-11) + "px";
  tdReal.style.textAlign="center";

  tdBarCode.innerText=barcode;
  tdUm.innerText='шт';
  tdRef.innerText='1';
  tdReal.innerText='1';

  tdUm.className='text-centered';
  //tdRef.className='text-right';
  //tdReal.className='text-right';



  tdRef.className='refQty';
  tdReal.className='realQty';

  trLower.appendChild(tdBarCode);
  trLower.appendChild(tdUm);
  trLower.appendChild(tdRef);
  trLower.appendChild(tdReal);

  tbody.appendChild(trHigher);
  tbody.appendChild(trLower);
  mainTable.appendChild(tbody);

  tdRowNum.rowSpan='2';
  tdProdName.colSpan='4';

  document.getElementById("totalRowQty").innerHTML=rowNum;
  setTotalQty();

  document.getElementById("barCodeInput").value='';
  rowNum++;
}

function setTotalQty(){
  var refQtylist = document.getElementsByClassName("refQty");
  var realQtylist = document.getElementsByClassName("realQty");

  var totalrefQty=0;
  var totalrealQty=0;

  for(var tdIndex=0; tdIndex<refQtylist.length; tdIndex++){
    totalrealQty+=parseInt(realQtylist[tdIndex].innerHTML);
    totalrefQty+=parseInt(refQtylist[tdIndex].innerHTML);
  }
  document.getElementById("totalDocQty").innerHTML=totalrefQty;
  document.getElementById("totalRealQty").innerHTML=totalrealQty;
}

function showRealQtyFunction(cell,displayedQty, prodName){
  var input='<br><input id="inputRealQty" type="number" style="text-align:center; border: 1px solid grey; padding: 5px" value="'+displayedQty+'"></<input>';
  var realQtyDialog=app7.dialog.create({
    destroyOnClose:true,
    content:input,
    title: 'Фактический остаток',
    text:prodName,
    on:{
      open:function(){
        document.getElementById("inputRealQty").focus();
      },
    },
    buttons:[
      {
        text:"ОТМЕНА",
        onClick:function(){
          realQtyDialog.close();
        }
      },
      {
        text:"ВВОД",
        keyCodes:[13],
        onClick:function(){
          cell.innerText=document.getElementById("inputRealQty").value.trim() || 0;
          setTotalQty();
          realQtyDialog.close();
        }
      }
    ]
  });

  realQtyDialog.open();
}

$$('#my-login-screen [name="username"]').on('click', function(){
  selectUserDialog();
});

var usersDialog;
function selectUserDialog(){
  usersDialog=app7.dialog.create({
    content:generateUserDialogContent(users),
    on: {
      open: function () {
        $$(document).on('click', '.userNameLi', function(e){
          setUserloginData(e.target.innerText);
        });
      }
    }
  });
  usersDialog.open();
}

function generateUserDialogContent(users){
  if(!users || users.length==0) return '';
  var dialogDiv=document.createElement('div');
  dialogDiv.setAttribute("id","loginDialogContent");
  dialogDiv.setAttribute("style","height:300px");
  dialogDiv.style.overflow="scroll";
  dialogDiv.style.fontSize="30px";
  var ul=document.createElement('ul');
  dialogDiv.appendChild(ul);

  document.getElementById('app').appendChild(dialogDiv);
  for(var i in users){
    var userName=users[i].name;
    var userNameLi=document.createElement('li');
    userNameLi.innerHTML=userName;
    userNameLi.setAttribute("class",'userNameLi');
    ul.appendChild(userNameLi);
  }
  return document.getElementById('loginDialogContent').outerHTML;
}

function setUserloginData(username){
  usersDialog.close();
  $$('#my-login-screen [name="username"]').val(username);
}
