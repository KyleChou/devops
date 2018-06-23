/**
 * �ȽϺ���������
 * 
 * @param iCol
 *            ��������
 * @param sDataType
 *            ���е���������
 * @return
 */
function  generateCompareTRs(iCol, sDataType) {
     return   function  compareTRs(oTR1, oTR2) {
        vValue1 = convert(oTR1.cells[iCol].firstChild.nodeValue, sDataType);
        vValue2 = convert(oTR2.cells[iCol].firstChild.nodeValue, sDataType);
         if  (vValue1 < vValue2) {
             return  -1;
        }  else   if  (vValue1 > vValue2) {
             return  1;
        }  else  {
             return  0;
        }
    };
}
/**
 * ����������ֶ�����
 * 
 * @param sValue
 *            �ֶ�ֵ Ĭ��Ϊ�ַ����ͼ��Ƚ�ASCII��
 * @param sDataType
 *            �ֶ����� ����dateֻ֧�ָ�ʽΪmm/dd/yyyy��mmmm dd,yyyy(January 12,2004)
 * @return
 */
function  convert(sValue, sDataType) {
     switch  (sDataType) {
     case   "int" :
         return  parseInt(sValue);
     case   "float" :
         return  parseFloat(sValue);
     case   "date" :
         return   new  Date(Date.parse(sValue));
     default :
         return  sValue.toString();
    }
}
/**
 * ͨ����ͷ�Ա��н�������
 * 
 * @param sTableID
 *            Ҫ����ı�ID<table id=''>
 * @param iCol
 *            �ֶ���id eg: 0 1 2 3 ...
 * @param sDataType
 *            ���ֶ��������� int,float,date ȱʡ����µ��ַ�������
 */
function  sortTable(sTableID, iCol, sDataType) {
     var  oTable = document.getElementById(sTableID);
     var  oTBody = oTable.tBodies[0];
     var  colDataRows = oTBody.rows;
     var  aTRs =  new  Array;
     for  (  var  i = 0; i < colDataRows.length; i++) {
        aTRs[i] = colDataRows[i];
    }
     if  (oTable.sortCol == iCol) {
        aTRs.reverse();
    }  else  {
        aTRs.sort(generateCompareTRs(iCol, sDataType));
    }
     var  oFragment = document.createDocumentFragment();
     for  (  var  j = 0; j < aTRs.length; j++) {
        oFragment.appendChild(aTRs[j]);
    }
    oTBody.appendChild(oFragment);
    oTable.sortCol = iCol;
}