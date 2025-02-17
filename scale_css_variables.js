
  function scaleCSSVar(docQueryResult,cssVarName,factor,iPrecision) {
    
    //  docQueryResult is a variable created by a document.querySelector() call, 
    //    e.g. var rootcss1 = document.querySelector(':root');
    
    //    changes --my-heightvar for example from 3.6em to 4.12em, depending on factor
    //    set iPrecision to zero if you want to round to integers
    
       var rs = getComputedStyle(docQueryResult);
     if (rs) {
        var str = rs.getPropertyValue(cssVarName);
        if (str && (str.length > 0)) {
           var patt1 = /[0-9.]/g;
           var patt2 = /[a-zA-Z]/g;
           var letters_inspec = str.match(patt2).join('');
           var digits_inspec = str.match(patt1).join('');
           if ((parseFloat(digits_inspec) > 0.0) && (factor > 0)) {
             var newDigits = parseFloat(digits_inspec) * factor;
             if (newDigits > 0) {
               var newStr = '' + newDigits.toFixed(iPrecision) + letters_inspec;
              //console.log(newStr);
               docQueryResult.style.setProperty(cssVarName,newStr);
             }
           }
        }
     }
  }

  function setCSSVar(docQueryResult,cssVarName,newValue,newUnits) {
    
    //  if newUnits is omitted, it uses existing units e.g. "px"
    //    css variable must already exist
    
     var rs = getComputedStyle(docQueryResult);
     if (rs) {
        var str = rs.getPropertyValue(cssVarName);
        if (str && (str.length > 0)) {
           var patt2 = /[a-zA-Z]/g;
           if (newUnits && (newUnits.length > 0))
             var letters_inspec = newUnits;
           else
             var letters_inspec = str.match(patt2).join('');
           if (newValue && ((newValue > 0) || (newValue.length > 0))) {
               var newStr = '' + newValue + letters_inspec;
              //console.log(newStr);
               docQueryResult.style.setProperty(cssVarName,newStr);
           }
        }
     }
  }


  function getCSSVarUnits(docQueryResult,cssVarName) { var retVal = null;
    //  e.g. "px"
     var rs = getComputedStyle(docQueryResult);
     if (rs) {
        var str = rs.getPropertyValue(cssVarName);
        if (str && (str.length > 0)) {
           var patt2 = /[a-zA-Z]/g;
           var letters_inspec = str.match(patt2).join('');
           if (letters_inspec)
             retVal = letters_inspec;
        }
     }
     return retVal;
  }

  function getCSSVarValue(docQueryResult,cssVarName) { var retVal = null;
    //  returns a string e.g. "40" , use parseFloat() on result if you want a number
     var rs = getComputedStyle(docQueryResult);
     if (rs) {
        var str = rs.getPropertyValue(cssVarName);
        if (str && (str.length > 0)) {
           var patt1 = /[0-9.]/g;
           var value_inspec = str.match(patt1).join('');
           if (value_inspec)
             retVal = value_inspec;
        }
     }
     return retVal;
  }

