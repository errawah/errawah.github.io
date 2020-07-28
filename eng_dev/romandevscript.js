var temp="";
var temp1="";
var txt="";
var txt1="";
var dev_active=false;
var key_code;


function alternate_menu2(main_code,main_var)
{
  temp_code="<tr><td style='text-align:center'>\u0905-A <td style='text-align:center'>\u0906-AA <td style='text-align:center'>\u0907-I"; 
  temp_code+="<td style='text-align:center'>\u0908-II/EE <td style='text-align:center'>\u0909-U <td style='text-align:center'>\u090A-UU/OO"; 
  temp_code+="<td style='text-align:center'>\u090F-E <td style='text-align:center'>\u0910-AI <td style='text-align:center'>\u0913-O";
  temp_code+="<td style='text-align:center'>\u0914-AU";
  return temp_code;
}


function alternate_menu1(main_code,main_var)
{
  temp_code="<tr><td style='text-align:center;'>"+main_code+"\u094D="+main_var+" <td style='text-align:center'>"+main_code+"="+main_var+"a";
  temp_code+="<td style='text-align:center'>"+main_code+"\u093E="+main_var+"aa <td style='text-align:center;'>"+main_code+"\u093F="+main_var+"i";
  temp_code+="<td style='text-align:center'>"+main_code+"\u0940="+main_var+"ii/"+main_var+"ee <td style='text-align:center'>"+main_code+"\u0941="+main_var+"u";
  temp_code+="<td style='text-align:center'>"+main_code+"\u0942="+main_var+"uu/"+main_var+"oo <td style='text-align:center'>"+main_code+"\u0947="+main_var+"e";
  temp_code+="<td style='text-align:center'>"+main_code+"\u0948="+main_var+"ai <td style='text-align:center'>"+main_code+"\u094B="+main_var+"o";
  temp_code+="<td style='text-align:center'>"+main_code+"\u094C="+main_var+"au <td style='text-align:center'>"+main_code+"\u0902="+main_var+"* <td style='text-align:center'>"+main_code+"\u0901="+main_var+"**";
  temp_code+="<td style='text-align:center'>"+main_code+"\u0962="+main_var+"Li <td style='text-align:center'>"+main_code+"\u0963="+main_var+"Lii";
  temp_code+="<td style='text-align:center'>"+main_code+"\u0943="+main_var+"Ri <td style='text-align:center'>"+main_code+"\u0944="+main_var+"Rii";
  return temp_code;
}

function BackSpace() //to delete while the cursor is in the choice menu
{
  keyCapture();
  if(key_code==08)
  {
    txt1=txt.substring(0, txt.length-1);
    alternate_id.style.display="none";
    eng_dev_form.roman_font.focus();   
    eng_dev_form.roman_font.value=txt1;
    txt1="";
  }
}


function passFromList()	//standard returns passed from List to Roman Textarea
{
  eng_dev_form.roman_font.value=txt1;
  if(key_code!=13 && key_code!=27 && key_code!=08)
  {
    eng_dev_form.roman_font.value+=String.fromCharCode(key_code);  
  }
  alternate_id.style.display="none";
  eng_dev_form.roman_font.focus();
  Translate();
}

function keyCapture() //capture keys input from the Keyboard
{
  ns=(document.layers);
  if(!ns)
  {
    key_code=event.keyCode;
  }else
  {
    key_code=e.Which;
  }

}
var translate_switch;
function Translate()
{
  
  translate_switch="on";
  txt=eng_dev_form.roman_font.value;    
  for(i=0; i<txt.length; i++) //read the whole roman value from the textarea
  { 
    //==== Single letter; 

    if(txt.charAt(i)=="{")
    {
      translate_switch="off";
    }else
    if(txt.charAt(i)=="}") 
    {
      translate_switch="on";
    }
    
    if(txt.charAt(i)!="{" && txt.charAt(i)!="}")
    {
      if(translate_switch=="off")
      {
        temp+=txt.charAt(i);  
      }else
      if(translate_switch=="on")
      {
        if(txt.charAt(i)==" ")
        {
          if(txt.charAt(i-1)==':' || txt.charAt(i-1)=='.' || txt.charAt(i-1)=='a' || txt.charAt(i-1)=='e' || txt.charAt(i-1)=='i' || txt.charAt(i-1)=='o' || txt.charAt(i-1)=='u' || txt.charAt(i-1)=='}' || txt.charAt(i-1)=='A' || txt.charAt(i-1)=='E' || txt.charAt(i-1)=='I' || txt.charAt(i-1)=='O' || txt.charAt(i-1)=='U' || txt.charAt(i-1)=='*' || txt.charAt(i-1)=='**' || txt.charAt(i-1)=='?' || txt.charAt(i-1)==',' || txt.charAt(i-1)=='(' || txt.charAt(i-1)==')' || txt.charAt(i-1)=='\"' || txt.charAt(i-1)=='[' || txt.charAt(i-1)==']' || txt.charAt(i-1)=="\'" || txt.charAt(i-1)=="<" || txt.charAt(i-1)==">" || txt.charAt(i-1)==";") 
          {
          }else
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1=""; 
          }
          temp+=" ";
        }else
        if(txt.charAt(i)==':')
        {
          temp+="\u0903";
        }else
        if(txt.charAt(i)=='.')
        {
          if(txt.charAt(i-1)=='a' || txt.charAt(i-1)=='e' || txt.charAt(i-1)=='i' || txt.charAt(i-1)=='o' || txt.charAt(i-1)=='u' || txt.charAt(i-1)=='}') 
          {
            temp+="\u0964";
          }else
          if(txt.charAt(i-1)==" " || i==0)
          {
          }else
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1+"\u0964";
            temp1=""; 
          }
          temp+=" ";
        }else
        if(txt.charAt(i)=="\u000D") //for paragraph
        {
          temp+="\u000D";
        }else
        if(txt.charAt(i)=='0')
        { 
          temp+="\u0966";   
        }else
        if(txt.charAt(i)=='1')
        {
          temp+="\u0967";
        }else
        if(txt.charAt(i)=='2')
        {
          temp+="\u0968";
        }else
        if(txt.charAt(i)=='3')
        {
          temp+="\u0969";
        }else
        if(txt.charAt(i)=='4')
        { 
          temp+="\u096A";
        }else
        if(txt.charAt(i)=='5')
        {
          temp+="\u096B";
        }else
        if(txt.charAt(i)=='6')
        {
          temp+="\u096C";
        }else
        if(txt.charAt(i)=='7')
        {
          temp+="\u096D";
        }else
        if(txt.charAt(i)=='8')
        {
          temp+="\u096E";
        }else
        if(txt.charAt(i)=='9')
        {
          temp+="\u096F";
        }else
        if(txt.charAt(i)=='k')
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0915","k");
          html_code1+=alternate_menu1("\u0916","kh");
          html_code1+=alternate_menu1("\u0915\u094D\u0930","kr"); 
          html_code1+=alternate_menu1("\u0916\u094D\u0930","khr");
          html_code1+=alternate_menu1("\u0915\u094D\u0937","kSh");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          temp+="\u0915\u094D";
        }else
        if(txt.charAt(i)=='c')
        {
          html_code1="<table border=1 cellpadding=5 cellspacing=0 style='height:100%; border:2px dotted red'>";
          html_code1+=alternate_menu1("\u0915","c");
          html_code1+=alternate_menu1("\u091A","ch");
          html_code1+=alternate_menu1("\u091B","chh");
          html_code1+=alternate_menu1("\u0915\u094D\u0930","cr");
          html_code1+=alternate_menu1("\u091A\u094D\u0930","chr");
          html_code1+=alternate_menu1("\u091B\u094D\u0930","chhr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          temp+="\u0915\u094D";
        }else
        if(txt.charAt(i)=='q')
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0915","q");
          html_code1+=alternate_menu1("\u0915\u094D\u0930","qr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          temp+="\u0915\u094D";  
        }else
        if(txt.charAt(i)=='g')
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0917","g");
          html_code1+=alternate_menu1("\u0918","gh");
          html_code1+=alternate_menu1("\u0917\u094D\u0930","gr");
          html_code1+=alternate_menu1("\u0918\u094D\u0930","ghr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          if(txt.charAt(i-1)=="n")
          {
            alternate_id.innerHTML=html_code1;
            alternate_id.style.display="block";
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u0919\u094D";
          }else
          {
            temp+="\u0917\u094D";
          }
        }else
        if(txt.charAt(i)=='j')
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u091C","j");
          html_code1+=alternate_menu1("\u091D","jh");
          html_code1+=alternate_menu1("\u091C\u094D\u0930","jr");
          html_code1+=alternate_menu1("\u091D\u094D\u0930","jhr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          temp+="\u091C\u094D";
        }else
        if(txt.charAt(i)=='z')
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u091C","z");
          html_code1+=alternate_menu1("\u091C\u094D\u091E","zyn");
          html_code1+=alternate_menu1("\u091C\u094D\u0930","zr");
          html_code1+=alternate_menu1("\u091C\u094D\u091E\u094D\u0930","zynr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          temp+="\u091C\u094D";
        }else
        if(txt.charAt(i)=='T')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u091F","T");
          html_code1+=alternate_menu1("\u0920","Th");
          html_code1+=alternate_menu1("\u0924","t");
          html_code1+=alternate_menu1("\u0925","th");
          html_code1+=alternate_menu1("\u091F\u094D\u0930","Tr");
          html_code1+=alternate_menu1("\u0920\u094D\u0930","Thr");
          html_code1+=alternate_menu1("\u0924\u094D\u0930","tr");
          html_code1+=alternate_menu1("\u0925\u094D\u0930","thr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          temp+="\u091F\u094D";
        }else
        if(txt.charAt(i)=='D')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0921","D");
          html_code1+=alternate_menu1("\u0922","Dh");
          html_code1+=alternate_menu1("\u0926","d");
          html_code1+=alternate_menu1("\u0927","dh");
          html_code1+=alternate_menu1("\u0921\u094D\u0930","Dr");
          html_code1+=alternate_menu1("\u0922\u094D\u0930","Dhr");
          html_code1+=alternate_menu1("\u0926\u094D\u0930","dr");
          html_code1+=alternate_menu1("\u0927\u094D\u0930","dhr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          temp+="\u0921\u094D";
        }else
        if(txt.charAt(i)=='N')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0923","N");
          html_code1+=alternate_menu1("\u0928","n");
          html_code1+=alternate_menu1("\u0919","ng");
          html_code1+=alternate_menu1("\u0923\u094D\u0930","Nr");
          html_code1+=alternate_menu1("\u0928\u094D\u0930","nr");
          html_code1+=alternate_menu1("\u0919\u094D\u0930","ngr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          temp+="\u0923\u094D";
        }else
        if(txt.charAt(i)=='t')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0924","t");
          html_code1+=alternate_menu1("\u0925","th");
          html_code1+=alternate_menu1("\u091F","T");
          html_code1+=alternate_menu1("\u0920","Th");
          html_code1+=alternate_menu1("\u0924\u094D\u0930","tr");
          html_code1+=alternate_menu1("\u0925\u094D\u0930","thr");
          html_code1+=alternate_menu1("\u091F\u094D\u0930","Tr");
          html_code1+=alternate_menu1("\u0920\u094D\u0930","Thr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          temp+="\u0924\u094D";
        }else
        if(txt.charAt(i)=='d')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0926","d");
          html_code1+=alternate_menu1("\u0927","dh");
          html_code1+=alternate_menu1("\u0921","D");
          html_code1+=alternate_menu1("\u0922","Dh");
          html_code1+=alternate_menu1("\u0926\u094D\u0930","dr");
          html_code1+=alternate_menu1("\u0927\u094D\u0930","dhr");
          html_code1+=alternate_menu1("\u0921\u094D\u0930","Dr");
          html_code1+=alternate_menu1("\u0922\u094D\u0930","Dhr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          temp+="\u0926\u094D";
        }else
        if(txt.charAt(i)=='n')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0928","n");
          html_code1+=alternate_menu1("\u0923","N");
          html_code1+=alternate_menu1("\u0919","ng");
          html_code1+=alternate_menu1("\u0928\u094D\u0930","nr");
          html_code1+=alternate_menu1("\u0919\u094D\u0930","ngr");
          html_code1+=alternate_menu1("\u0923\u094D\u0930","Nr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";
          if(txt.charAt(i-1)=="y")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u091E\u094D";
          }else
          {
            temp+="\u0928\u094D";
          }
        }else
        if(txt.charAt(i)=='p')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u092A","p");
          html_code1+=alternate_menu1("\u092B","ph");
          html_code1+=alternate_menu1("\u092A\u094D\u0930","pr");
          html_code1+=alternate_menu1("\u092B\u094D\u0930","phr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block"; 
          temp+="\u092A\u094D";
        }else
        if(txt.charAt(i)=='f')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u092B","f");
          html_code1+=alternate_menu1("\u092B\u094D\u0930","fr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block"; 
          temp+="\u092B\u094D";
        }else
        if(txt.charAt(i)=='b')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u092C","b");
          html_code1+=alternate_menu1("\u092D","bh");
          html_code1+=alternate_menu1("\u092C\u094D\u0930","br");
          html_code1+=alternate_menu1("\u092D\u094D\u0930","bhr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block"; 
          temp+="\u092C\u094D";
        }else
        if(txt.charAt(i)=='m')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u092E","m");
          html_code1+=alternate_menu1("\u092E\u094D\u0930","mr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block"; 
          if(txt.charAt(i-1)=='h' && txt.charAt(i-2)=='o')
          {
            temp1=temp.substring(0, temp.length-3);
            temp=temp1;
            temp1="";
            temp+="\u0950";
          }else
          {
            temp+="\u092E\u094D";
          }
        }else
        if(txt.charAt(i)=='y')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u091E","yn");
          html_code1+=alternate_menu1("\u091E\u094D\u0930","ynr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block"; 
          temp+="\u092F\u094D";
        }else
        if(txt.charAt(i)=='r')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0930","r");
          html_code1+=alternate_menu1("\u0930\u094D\u0930","rr");
          html_code1+="<tr><td style='text-align:center'>\u090B-Re <td style='text-align:center'>\u0960-Ree";
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";  
          temp+="\u0930\u094D";
        }else
        if(txt.charAt(i)=='R')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0930","r");
          html_code1+=alternate_menu1("\u0930\u094D\u0930","rr");
          html_code1+="<tr><td style='text-align:center'>\u090B-Re <td style='text-align:center'>\u0960-Ree";
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";  
        }else
        if(txt.charAt(i)=='l')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0932","l");
          html_code1+=alternate_menu1("\u0932\u094D\u0930","lr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";  
          temp+="\u0932\u094D";
        }else
        if(txt.charAt(i)=='L')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0932","l");
          html_code1+=alternate_menu1("\u0932\u094D\u0930","lr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block";  	
        }else
        if(txt.charAt(i)=='v') 
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0935","v");
          html_code1+=alternate_menu1("\u0935\u094D\u0930","vr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block"; 
          temp+="\u0935\u094D";
        }else 
        if (txt.charAt(i)=='w')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0935","w");
          html_code1+=alternate_menu1("\u0935\u094D\u0930","wr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block"; 
          temp+="\u0935\u094D";
        }
        else
        if(txt.charAt(i)=='s')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0938","s");
          html_code1+=alternate_menu1("\u0936","sh");
          html_code1+=alternate_menu1("\u0937","Sh");
          html_code1+=alternate_menu1("\u0938\u094D\u0930","sr");
          html_code1+=alternate_menu1("\u0936\u094D\u0930","shr");
          html_code1+=alternate_menu1("\u0937\u094D\u0930","Shr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block"; 
          temp+="\u0938\u094D";
        }else
        if(txt.charAt(i)=='h')      
        {
          html_code1="<table>";
          html_code1+=alternate_menu1("\u0939","h");
          html_code1+=alternate_menu1("\u0939\u094D\u0930","hr");
          html_code1+="</td></tr></table>";
          alternate_id.innerHTML=html_code1;
          alternate_id.style.display="block"; 
          if(txt.charAt(i-1)=="k")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u0916\u094D";
          }else
          if(txt.charAt(i-1)=="g")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u0918\u094D";
          }else 
          if(txt.charAt(i-1)=="c")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u091A\u094D";
          }else
          if(txt.charAt(i-1)=="j")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u091D\u094D";
          }else 
          if(txt.charAt(i-1)=="T")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u0920\u094D";
          }else
          if(txt.charAt(i-1)=="D")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u0922\u094D";
          }else
          if(txt.charAt(i-1)=="t")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u0925\u094D";
          }else
          if(txt.charAt(i-1)=="d")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u0927\u094D";
          }else
          if(txt.charAt(i-1)=="p")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u092B\u094D";
          }else
          if(txt.charAt(i-1)=="b")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u092D\u094D";
          }else
          if(txt.charAt(i-1)=="s")
          {
            temp1=temp.substring(0, temp.length-2);
            temp=temp1;
            temp1="";
            temp+="\u0936\u094D";
          }else
          if(txt.charAt(i-1)=="S")
          {
            if(txt.charAt(i-2)=="k")
            {
              temp+="\u0937\u094D";
            }else
            {
              temp1=temp.substring(0, temp.length-1);
              temp=temp1;
              temp1="";
              temp+="\u0937\u094D";
            }

          }else
          {
            temp+="\u0939\u094D";
          } 
          //------------------------------------------      
          if(txt.substring(i-2,i)=="ch")
          {
            temp1=temp.substring(0, temp.length-4);
            temp=temp1;
            temp1="";
            temp+="\u091B\u094D";
          }else
          if(txt.substring(i-2,i)=="ks")
          {
            temp1=temp.substring(0, temp.length-4);
            temp=temp1;
            temp1="";
            temp+="\u0934\u094D";
          }
          //--------------------------------------------
        }else if(txt.charAt(i)=='*')      
        {
          if(txt.charAt(i-1)=='*')
          {
            if(txt.charAt(i-2)=='a' || txt.charAt(i-2)=="e" || txt.charAt(i-2)=="i" || txt.charAt(i-2)=="o" || txt.charAt(i-2)=="u" || txt.charAt(i-2)=='A' || txt.charAt(i-2)=="E" || txt.charAt(i-2)=="I" || txt.charAt(i-2)=="O" || txt.charAt(i-2)=="U")
            {
              if (txt.charAt(i-1)=="*")
              {
                temp1=temp.substring(0, temp.length-1);
                temp=temp1;
                temp1="";
                temp+="\u0901";
              }else
              {
                temp+="\u0901";
              }
            }else
            if (txt.charAt(i-2)!=" " && i>1)
            {
              temp1=temp.substring(0, temp.length-1);
              temp=temp1;
              temp1="";
              temp+="\u0901";
            }
          }else
          if(txt.charAt(i-1)=='a' || txt.charAt(i-1)=="e" || txt.charAt(i-1)=="i" || txt.charAt(i-1)=="o" || txt.charAt(i-1)=="u" || txt.charAt(i-1)=='A' || txt.charAt(i-1)=="E" || txt.charAt(i-1)=="I" || txt.charAt(i-1)=="O" || txt.charAt(i-1)=="U")
          {
            temp+="\u0902";   
          }else
          if (txt.charAt(i-1)!=" " && i>0)
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1="";
            temp+="\u0902";
          }
        }else if (txt.charAt(i)=='?' || txt.charAt(i)==',' || txt.charAt(i)=='(' || txt.charAt(i)==')' || txt.charAt(i)=='\"' || txt.charAt(i)=='[' || txt.charAt(i)==']' || txt.charAt(i)=="\'" || txt.charAt(i)=="<" || txt.charAt(i)==">" || txt.charAt(i)==";")
        {
          temp+=txt.charAt(i);
        } 


        

//======================================================== Vowel sounds ==================================================
        else if (txt.charAt(i)=='A')
        {
          html_code2="<table>";
          html_code2+=alternate_menu2("\u0905","A");
          html_code2+="</td></tr></table>";
          alternate_id.innerHTML=html_code2;
          alternate_id.style.display="block";  
          if (txt.charAt(i-1)=='A')
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp+="\u0906";
          }else
          {
            temp+="\u0905";
          }
          
        }
        else if(txt.charAt(i)=='a')      
        {
          html_code2="<table>";
          html_code2+=alternate_menu2("\u0905","A");
          html_code2+="</td></tr></table>";
          alternate_id.innerHTML=html_code2;
          alternate_id.style.display="block";  
          if(txt.charAt(i-1)=='a')
          {
            temp+="\u093E";
          }else
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1="";
          }
        }
        else if (txt.charAt(i)=='E')
        {
          html_code2="<table>";
          html_code2+=alternate_menu2("\u0905","A");
          html_code2+="</td></tr></table>";
          alternate_id.innerHTML=html_code2;
          alternate_id.style.display="block";  
          if (txt.charAt(i-1)=="R")
          {
            temp+="\u0960";
          }else
          if (txt.charAt(i-1)=="L")
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp+="\u0963";
          }else
          if (txt.charAt(i-1)=='E')
          {
            if (txt.charAt(i-2)!='E')
            {
              temp1=temp.substring(0, temp.length-1);
              temp=temp1;
              temp+="\u0910";
            }   
          }else
          {
            temp+="\u090F";
          }
        }
        else if(txt.charAt(i)=='e')      
        {
          html_code2="<table>";
          html_code2+=alternate_menu2("\u0905","A");
          html_code2+="</td></tr></table>";
          alternate_id.innerHTML=html_code2;
          alternate_id.style.display="block";
          if (txt.charAt(i-1)=="R")
          {
            temp+="\u090B";
          }else
          if (txt.charAt(i-1)=="L")
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp+="\u0962";
          }else  
          if(txt.charAt(i-1)=='e')
          {
            if (txt.charAt(i-2)=="R")
            {
              temp1=temp.substring(0, temp.length-1);
              temp=temp1;
              temp+="\u0960";
            }else
            {
              temp1=temp.substring(0, temp.length-1);
              temp=temp1;
              temp1="";
              temp+="\u0940";
            }
          }else
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1="";
            temp+="\u0947";
          }
        }
        else if (txt.charAt(i)=='I')
        {
          html_code2="<table>";
          html_code2+=alternate_menu2("\u0905","A");
          html_code2+="</td></tr></table>";
          alternate_id.innerHTML=html_code2;
          alternate_id.style.display="block";
          
          if (txt.charAt(i-1)=='I')
          {
            if (txt.charAt(i-2)!='I')
            {
              temp1=temp.substring(0, temp.length-1);
              temp=temp1;
              temp+="\u0908";
            }   
          }else
          {
            temp+="\u0907";
          }
        }
        else if(txt.charAt(i)=='i')      
        {
          html_code2="<table>";
          html_code2+=alternate_menu2("\u0905","A");
          html_code2+="</td></tr></table>";
          alternate_id.innerHTML=html_code2;
          alternate_id.style.display="block";
          if (txt.charAt(i-1)=="R")
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1="";	
            temp+="\u0943";
          }else
          if (txt.charAt(i-1)=="L")
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1="";	
            temp+="\u0962";
          }else
          if(txt.charAt(i-1)=='i')
          {
            if (txt.charAt(i-2)=='R')
            {
              temp1=temp.substring(0, temp.length-1);
              temp=temp1;
              temp1="";
              temp+="\u0944";
            }else
            if (txt.charAt(i-2)=='L')
            {
              temp1=temp.substring(0, temp.length-1);
              temp=temp1;
              temp1="";
              temp+="\u0963";
            }else
            {
              temp1=temp.substring(0, temp.length-1);
              temp=temp1;
              temp1="";
              temp+="\u0940";
            }
          }else
          if (txt.charAt(i-1)=='a')
          {
            temp+="\u0948";
          }else
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1="";
            temp+="\u093F";
          }
        }else 
        if (txt.charAt(i)=='O')
        {
          html_code2="<table>";
          html_code2+=alternate_menu2("\u0905","A");
          html_code2+="</td></tr></table>";
          alternate_id.innerHTML=html_code2;
          alternate_id.style.display="block";  
          if (txt.charAt(i-1)=='O')
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp+="\u0914";
          }else
          {
            temp+="\u0913";
          }
        }
        else if(txt.charAt(i)=='o')      
        {
          html_code2="<table>";
          html_code2+=alternate_menu2("\u0905","A");
          html_code2+="<td>\u0950-ohm";
          html_code2+="</td></tr></table>";
          alternate_id.innerHTML=html_code2;
          alternate_id.style.display="block";
          if(txt.charAt(i-1)=='o')
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1="";
            temp+="\u0942";
          }else
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1="";
            temp+="\u094B";
          }
        }
        else if (txt.charAt(i)=='U')
        {
          html_code2="<table>";
          html_code2+=alternate_menu2("\u0905","A");
          html_code2+="</td></tr></table>";
          alternate_id.innerHTML=html_code2;
          alternate_id.style.display="block";  
          if (txt.charAt(i-1)=='U')
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp+="\u090A";
          }else
          {
            temp+="\u0909";
          }
        }
        else if(txt.charAt(i)=='u')      
        {
          html_code2="<table>";
          html_code2+=alternate_menu2("\u0905","A");
          html_code2+="</td></tr></table>";
          alternate_id.innerHTML=html_code2;
          alternate_id.style.display="block";  
          if(txt.charAt(i-1)=='u')
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1="";
            temp+="\u0942";
          }else
          if (txt.charAt(i-1)=="a")
          {
            temp+="\u094C";
          }else
          {
            temp1=temp.substring(0, temp.length-1);
            temp=temp1;
            temp1="";
            temp+="\u0941";
          }
          
        }


      }
    }
  }//end for 
  eng_dev_form.nepali_font.value=temp;
  temp=""; 
  temp1="";    
}
