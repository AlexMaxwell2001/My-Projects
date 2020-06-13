	function Reset()
	{
		document.getElementById('inputBox').value="";
		document.getElementById('outputBox').innerHTML="";
		document.getElementById('calculationBox').innerHTML="";
		document.getElementById('calculationBox2').innerHTML="";
		document.getElementById('inputBox').style.background="white";
		document.getElementById('warning2').style.visibility="hidden";
		if($("#fieldSearchSelect1").val() == 10 || $("#fieldSearchSelect2").val()==10)
		{
			document.getElementById('calculationBox2').style.visibility="hidden";
		}
		else 
		{
			document.getElementById('calculationBox2').style.visibility="visible";
		}
	}
	function Swap()
	{
		var value1 = $("#fieldSearchSelect1").val();
		var value2= $("#fieldSearchSelect2").val();
		$('#fieldSearchSelect1 option[value='+ value2+']').prop("selected",true);
		$('#fieldSearchSelect2 option[value='+ value1+']').prop("selected",true);
		Reset();
		inputTag();
		headerTag();
		outputTag();
	}
	function features()
	{
		Reset();
		inputTag();
		headerTag();
		outputTag();
		if($("#fieldSearchSelect1").val()==$("#fieldSearchSelect2").val())
		{
			document.getElementById('warning1').style.visibility="visible";
			document.getElementById('Convert').disabled=true;
			document.getElementById('Swap').disabled=true;
			document.getElementById('Reset').disabled=true;
		}
		else 
		{
			document.getElementById('warning1').style.visibility="hidden";
			document.getElementById('Convert').disabled=false;
			document.getElementById('Swap').disabled=false;
			document.getElementById('Reset').disabled=false;
		}
	}
	function validation()
	{
		var input = document.getElementById('inputBox').value;
		var base=$("#fieldSearchSelect1").val();
		var valid= false;
		var valueholder=0;
		if(input == "")
		{
			document.getElementById('inputBox').style.background="white";
			document.getElementById('warning2').style.visibility="hidden";
			document.getElementById('Convert').disabled=false;
			document.getElementById('Swap').disabled=false;
		}
		if(base==1)
		{
			while(input.length>0)
			{
				if(input.charAt(input.length-1) == 1)
				{
					document.getElementById('warning2').style.visibility="hidden";
					document.getElementById('Convert').disabled=false;
					document.getElementById('Swap').disabled=false;
					document.getElementById('inputBox').style.background="#ccff66";
				}
				else{
					document.getElementById('warning2').style.visibility="visible";
					document.getElementById('Convert').disabled=true;
					document.getElementById('Swap').disabled=true;
					document.getElementById('inputBox').style.background="rgb(255, 240, 240)";
					break;
				}
				input= input.substring(0,input.length-1);
			}
		}
		else
		{
			while(input.length>0)
			{
				valid=false;
				for(var i=0;i<base;i++)
				{
					valueholder=i;
					if(i == 10)
					{
						valueholder='A';
					}
				    else if(i== 11)
					{	
						valueholder='B';
					}
				    else if(i == 12)
					{
						valueholder='C';
					}
				    else if(i == 13)
					{
						valueholder='D';
					}
					else if(i == 14)
					{
						valueholder='E';
					}
					else if(i == 15)
					{
						valueholder='F';
					}
					if(input.charAt(input.length-1).toUpperCase()==valueholder)
					{
						document.getElementById('warning2').style.visibility="hidden";
						document.getElementById('Convert').disabled=false;
						document.getElementById('Swap').disabled=false;
						document.getElementById('inputBox').style.background="#ccff66";
						valid=true;
						break;
					}
				}
				if(!valid)
				{
					document.getElementById('warning2').style.visibility="visible";
					document.getElementById('Convert').disabled=true;
					document.getElementById('Swap').disabled=true;
					document.getElementById('inputBox').style.background="rgb(255, 240, 240)";
					break;
				}
				input=input.substring(0,input.length-1);
			}
		}
	}
	function headerTag()
	{
		var value1=$("#fieldSearchSelect1 option:selected").text();
		var value2=$("#fieldSearchSelect2 option:selected").text();
		document.getElementById('Title1').innerHTML=value1 + " To " + value2 + " Converter";
		
	}
	function inputTag()
	{
		if($("#fieldSearchSelect1").val()==1)
		{
			document.getElementById('label1').innerHTML="Enter a Unary Number:";
		}
		else if($("#fieldSearchSelect1").val()==2)
		{
			document.getElementById('label1').innerHTML="Enter a Binary Number:";
		}
		else if($("#fieldSearchSelect1").val()==3)
		{
			document.getElementById('label1').innerHTML="Enter a Ternary Number:";
		}
		else if($("#fieldSearchSelect1").val()==4)
		{
			document.getElementById('label1').innerHTML="Enter a Quaternary Number:";
		}
		else if($("#fieldSearchSelect1").val()==5)
		{
			document.getElementById('label1').innerHTML="Enter a Quinary Number:";
		}
		else if($("#fieldSearchSelect1").val()==6)
		{
			document.getElementById('label1').innerHTML="Enter a Senary Number:";
		}
		else if($("#fieldSearchSelect1").val()==7)
		{
			document.getElementById('label1').innerHTML="Enter a Septenary Number:";
		}
		else if($("#fieldSearchSelect1").val()==8)
		{
			document.getElementById('label1').innerHTML="Enter a Octal Number:";
		}
		else if($("#fieldSearchSelect1").val()==9)
		{
			document.getElementById('label1').innerHTML="Enter a Nonary Number:";
		}
		else if($("#fieldSearchSelect1").val()==10)
		{
			document.getElementById('label1').innerHTML="Enter a Decimal Number:";
		}
		else if($("#fieldSearchSelect1").val()==11)
		{
			document.getElementById('label1').innerHTML="Enter a Undecimal Number:";
		}
		else if($("#fieldSearchSelect1").val()==12)
		{
			document.getElementById('label1').innerHTML="Enter a Duodecimal Number:";
		}
		else if($("#fieldSearchSelect1").val()==13)
		{
			document.getElementById('label1').innerHTML="Enter a Tridecimal Number:";
		}
		else if($("#fieldSearchSelect1").val()==14)
		{
			document.getElementById('label1').innerHTML="Enter a Tetradecimal Number:";
		}
		else if($("#fieldSearchSelect1").val()==15)
		{
			document.getElementById('label1').innerHTML="Enter a Pentadecimal Number:";
		}
		else if($("#fieldSearchSelect1").val()==16)
		{
			document.getElementById('label1').innerHTML="Enter a Hexadecimal Number:";
		}	
	}
	function outputTag()
	{
		if($("#fieldSearchSelect2").val()==1)
		{
			document.getElementById('label2').innerHTML="Unary Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==2)
		{
			document.getElementById('label2').innerHTML="Binary Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==3)
		{
			document.getElementById('label2').innerHTML="Ternary Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==4)
		{
			document.getElementById('label2').innerHTML="Quaternary Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==5)
		{
			document.getElementById('label2').innerHTML="Quinary Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==6)
		{
			document.getElementById('label2').innerHTML="Senary Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==7)
		{
			document.getElementById('label2').innerHTML="Septenary Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==8)
		{
			document.getElementById('label2').innerHTML="Octal Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==9)
		{
			document.getElementById('label2').innerHTML="Nonary Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==10)
		{
			document.getElementById('label2').innerHTML="Decimal Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==11)
		{
			document.getElementById('label2').innerHTML="Undecimal Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==12)
		{
			document.getElementById('label2').innerHTML="Duodecimal Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==13)
		{
			document.getElementById('label2').innerHTML="Tridecimal Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==14)
		{
			document.getElementById('label2').innerHTML="Tetradecimal Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==15)
		{
			document.getElementById('label2').innerHTML="Pentadecimal Number Output:";
		}
		else if($("#fieldSearchSelect2").val()==16)
		{
			document.getElementById('label2').innerHTML="Hexadecimal Number Output:";
		}	
	}
	function DectoAny()
	{
		var input=document.getElementById('inputBox').value+"";
		var base=$("#fieldSearchSelect2").val();
		var base2=$("#fieldSearchSelect1").val();
		var value="";
		var smallBase1= base.fontsize(1);
		var smallBase2 = base2.fontsize(1);
		var original = input;
		var calculation="";
		if(base>1)
		{
			while(input>0)
			{

				var remainder= input%base;
				if(remainder == 10)
				{
					remainder='A';
				}
				else if(remainder== 11)
				{
					remainder='B';
				}
				else if(remainder == 12)
				{
					remainder='C';
				}
				else if(remainder == 13)
				{
					remainder='D';
				}
				else if(remainder == 14)
				{
					remainder='E';
				}
				else if(remainder == 15)
				{
					remainder='F';
				}
				if(input == original)
				{
					calculation="(" + input + ")" + smallBase2 + " = "; 
					calculation=calculation + input + "/" + base + " (Has remainder " + remainder + ")";
				}
				else
				{
					calculation= calculation + " + "  +  input + "/" + base + " (Has remainder " + remainder + ")";
				}
				value=(remainder +"")+value;
				input=Math.floor(input/base);
				if(input==0)
				{
					calculation= calculation + " = (" + value + ")" + smallBase1 +".";
				}
			}
		}
		else
		{
			while(input>0)
			{
				if(input == original)
				{
					calculation="(" + input + ")" + smallBase2 + " = "; 
					calculation=calculation + "1";
				}
				else
				{
					calculation= calculation + " + 1";
				}
				value= (1 + "" ) + value;
				input--;
				if(input==0)
				{
					calculation= calculation + " = (" + value + ")" + smallBase1 +".";
				}
			}
		}
		document.getElementById('calculationBox').innerHTML=calculation;
		document.getElementById('outputBox').innerHTML=value;
	}
	function AnytoDec()
	{
		var input=document.getElementById('inputBox').value ;
		var base=$("#fieldSearchSelect1").val();
		var value=0;
		var index=0;
		var initialLength =input.length;
		var base2=$("#fieldSearchSelect2").val();
		var smallBase1= base.fontsize(1);
		var smallBase2 = base2.fontsize(1);
		var original = input;
		var calculation="";
		while(index!= initialLength)
		{
			var modulo=input%10;
			if(input[input.length-1] == 'A'||input[input.length-1] == 'a')
			{
				modulo=10;
			}
			else if(input[input.length-1] == 'B'||input[input.length-1] == 'b')
			{
				modulo=11;
			}
			else if(input[input.length-1] == 'C'|| input[input.length-1] == 'c')
			{
				modulo=12;
			}
			else if(input[input.length-1] == 'D'||input[input.length-1] == 'd')
			{
				modulo=13;
			}
			else if(input[input.length-1] == 'E'||input[input.length-1] == 'e')
			{
				modulo=14;
			}
			else if(input[input.length-1] == 'F'||input[input.length-1] == 'f')
			{
				modulo=15;
			}
			if(input == original)
			{
				calculation="(" + input + ")" + smallBase1 + " = "; 
				calculation=calculation + "( " +modulo + " x " + base + "^" + index +" )";
			}
			else
			{
				calculation= calculation + " + " + "( " +modulo + " x " + base + "^" + index +" )";
			}
			var value=value + (modulo * Math.pow(base,index));
			input=input.substring(0,input.length-1);
			index++;
			if(index==initialLength)
			{
				calculation= calculation + " = (" + value + ")" + smallBase2 +".";
			}
		}
		document.getElementById('calculationBox').innerHTML=calculation;
		document.getElementById('outputBox').innerHTML=value;
	}
	function AnytoAny()
	{
		var input=document.getElementById('inputBox').value;
		var base=$("#fieldSearchSelect1").val();
		var value=0;
		var index=0;
		var initialLength =input.length;
		var base2=$("#fieldSearchSelect2").val();
		var smallBase1= base.fontsize(1);
		var smallBase2 = base2.fontsize(1);
		var original=input;
		var calculation="";
		var calculation2="";
		var decimalBase ="10";
		var smallBaseDecimal = decimalBase.fontsize(1);
		while(index!= initialLength)
		{
			var modulo=input%10;
			if(input[input.length-1] == 'A' ||input[input.length-1] == 'a' )
			{
				modulo=10;
			}
			else if(input[input.length-1] == 'B'|| input[input.length-1] == 'b')
			{
				modulo=11;
			}
			else if(input[input.length-1] == 'C' || input[input.length-1] == 'c')
			{
				modulo=12;
			}
			else if(input[input.length-1] == 'D'|| input[input.length-1] == 'd')
			{
				modulo=13;
			}
			else if(input[input.length-1] == 'E'|| input[input.length-1] == 'e')
			{
				modulo=14;
			}
			else if(input[input.length-1] == 'F' || input[input.length-1] == 'f')
			{
				modulo=15;
			}
			if(input == original)
			{
				calculation="Calculation 1: " + "(" + input + ")" + smallBase1 + " = "; 
				calculation=calculation + "( " +modulo + " x " + base + "^" + index +" )";
			}
			else
			{
				calculation= calculation + " + " + "( " +modulo + " x " + base + "^" + index +" )";
			}
			var value=value + (modulo * Math.pow(base,index));
			input=input.substring(0,input.length-1);
			index++;
			if(index==initialLength)
			{
				calculation= calculation + " = (" + value + ")" + smallBaseDecimal +".";
			}
		}
		var decimal =value;
		var original = decimal;
		var base=$("#fieldSearchSelect2").val();
		var value2="";
		if(base>1)
		{
			while(decimal>0)
			{
				var remainder= decimal%base;
				if(remainder == 10)
				{
					remainder='A';
				}
				else if(remainder== 11)
				{
					remainder='B';
				}
				else if(remainder == 12)
				{
					remainder='C';
				}
				else if(remainder == 13)
				{
					remainder='D';
				}
				else if(remainder == 14)
				{
					remainder='E';
				}
				else if(remainder == 15)
				{
					remainder='F';
				}
				if(decimal == original)
				{
					calculation2= "Calculation 2: " + "(" + decimal + ")" + smallBaseDecimal + " = "; 
					calculation2=calculation2 + decimal + "/" + base + " (Has remainder " + remainder + ")";
				}
				else
				{
					calculation2= calculation2 + " + "  +  decimal + "/" + base + " (Has remainder " + remainder + ")";
				}
				value2=(remainder +"")+value2;
				decimal=Math.floor(decimal/base);
				if(decimal==0)
				{
					calculation2= calculation2 + " = (" + value2 + ")" + smallBase2 +".";
				}
			}
		}
		else
		{
			while(decimal>0)
			{
				if(decimal == original)
				{
					calculation2="Calculation 2 : "  +"(" + decimal + ")" + smallBaseDecimal + " = "; 
					calculation2=calculation2 + "1";
				}
				else
				{
					calculation2= calculation2 + " + 1";
				}
				value2= (1 + "" ) + value2;
				decimal--;
				if(input==0)
				{
					calculation2= calculation2 + " = (" + value2 + ")" + smallBase2 +".";
				}
			}
		}
		document.getElementById('outputBox').innerHTML=value2;
		document.getElementById('calculationBox').innerHTML=calculation;
		document.getElementById('calculationBox2').innerHTML=calculation2;
	}
	function convertManager()
	{ 
		for(var i=1;i<17;i++)
		{
			if($("#fieldSearchSelect2").val() == i && $("#fieldSearchSelect1").val() == 10)
			{
				DectoAny();
			}
		}
		for(var i=1;i<17;i++)
		{
			if($("#fieldSearchSelect1").val() == i && $("#fieldSearchSelect2").val() == 10)
			{
				AnytoDec();
			}
		}
		for(var i =1;i<17;i++)
		{
			if(i==10)continue;
			for(var j=1;j<17;j++)
			{
				if(j==10)continue;
				if(i==j)continue;
				if(($("#fieldSearchSelect1").val() == i && $("#fieldSearchSelect2").val() == j))
				{
					AnytoAny();
				}
			}
		}
	}