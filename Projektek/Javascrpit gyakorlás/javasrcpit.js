function nyilak(y)
{
max=4;
x=parseInt(szamok.value);
x=x+y;
if (x==0)
    {x=max;}
if (x==max+1)
    {x=1;}
szamok.value=x;
document.kep.src=x+".jpg";
} 