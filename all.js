var app = new Vue({
    el:'#app',
    data:{
        id:'',
        name:'',
        sex:'',
        height:'',
        weight:'',
        age:'',
        active:'',//日常活動度
        education:'',//教育程度
        educationData:['無','自修','小學','國中','高中','高職','專科','大學','研究所以上'],
        Vegetarian:'',
        vegetarianData:['奶素','蛋素','蛋奶素'],
        vegetarianKind:'',//素食種類
        pregnancy:'',//懷孕
        breastFeeding:'',//哺乳
        weightChangeEating:'',//因體重改變飲食
        toothacheData:['從來沒有','一個月少於一次','一個月1至3次','一星期1至3次','一星期4至6次','每天都有',],
        toothacheChangeEating:'',//因牙痛改變飲食
        toothHealthData:['良好','還好','不好',],
        toothHealt:'',//牙齒健康度
        OilLevelData:['跟自助餐差不多','比自助餐油','比自助餐不油'],
        OilLevel:'',//自助餐用油度

        onSwitch:'',
        nameSwitch:'',
        RidSwitch:'',//驗證碼switch
        RNameSwitch:'',//姓名switch
        RHeightSwitch:'',//身高switch
        RWeightSwitch:'',//體重switch
        RAgeSwitch:'',//年齡switch
        REducationSwitch:'',//教育程度switch
        RToothacheChangeEatingSwitch:'',//因牙痛改變飲食switch    
        RtoothHealtSwitch:'',  
        ROilLevelSwitch:'',
        
    },
   methods:{
     check:function(){
         var vm =this;
         if(vm.vegetarianKind == ""){
             alert('此處不能為空')
         }
     },
     sendCheck:function(){
        var vm =this;
        if (vm.id==''|| vm.name==''|| vm.sex==''||vm.height==''||vm.weight==''||vm.age==''||vm.active==''||vm.education==''||vm.Vegetarian==''||vm.weightChangeEating==''||vm.toothacheChangeEating==''||vm.toothHealt==''||vm.OilLevel==''){
            //||vm.vegetarianKind==''||vm.pregnancy==''||vm.breastFeeding==''
            alert('必填欄位不的為空')
        }
        else{
            return
        }
     },
     checkId:function(){
        var vm = this;
        if(vm.id ==''){
            vm.RidSwitch = "true";
        }
     },
     checkName:function(){
        var vm = this;
        if(vm.name ==''){
            vm.RNameSwitch = "true";
        }
     },
     checkHeight:function(){
        var vm = this;
        if(vm.height ==''){
            vm.RHeightSwitch = "true";
        }
     },
     checkWeight:function(){
        var vm = this;
        if(vm.weight ==''){
            vm.RWeightSwitch = "true";
        }
     },
     checkAge:function(){
        var vm = this;
        if(vm.age ==''){
            vm.RAgeSwitch = "true";
        }
     },
     checkEducation:function(){
        var vm = this;
        if(vm.education ==''){
            vm.REducationSwitch = "true";
        }
     },
     checkToothacheChangeEating:function(){
        var vm = this;
        if(vm.toothacheChangeEating ==''){
            vm.RToothacheChangeEatingSwitch = "true";
        }
     },
     checktoothHealt:function(){
        var vm = this;
        if(vm.toothHealt ==''){
            vm.RtoothHealtSwitch = "true";
        }
     },
     checkOilLevel:function(){
        var vm = this;
        if(vm.OilLevel ==''){
            vm.ROilLevelSwitch = "true";
        }
     }
    
     

},
watch:{
    id:function(){
        var vm=this;
        if(vm.id!==''){
            document.querySelector(".idTitle").style.color='black';
        }
        else{
            document.querySelector(".idTitle").style.color='red';
        }
    },
    name:function(){
        var vm=this;
        if(vm.name!==''){
            document.querySelector(".nameTitle").style.color='black';
        }
        else{
            document.querySelector(".nameTitle").style.color='red';
        }
    },
    height:function(){
        var vm=this;
        if(vm.height!==''){
            document.querySelector(".heightTitle").style.color='black';
        }
        else{
            document.querySelector(".heightTitle").style.color='red';
        }
    },
    weight:function(){
        var vm=this;
        if(vm.weight!==''){
            document.querySelector(".weightTitle").style.color='black';
        }
        else{
            document.querySelector(".weightTitle").style.color='red';
        }
    },
    age:function(){
        var vm=this;
        if(vm.age!==''){
            document.querySelector(".ageTitle").style.color='black';
        }
        else{
            document.querySelector(".ageTitle").style.color='red';
        }
    },
    education:function(){
        var vm=this;
        if(vm.education!==''){
            document.querySelector(".educationTitle").style.color='black';
        }
        else{
            document.querySelector(".educationTitle").style.color='red';
        }
    },
    active:function(){
        var vm=this;
        if(vm.active!==''){
            document.querySelector(".activeTitle").style.color='black';
        }
        else{
            document.querySelector(".activeTitle").style.color='red';
        }
    },
    toothacheChangeEating:function(){
        var vm=this;
        if(vm.toothacheChangeEating!==''){
            document.querySelector(".toothacheChangeEatingTitle").style.color='black';
        }
        else{
            document.querySelector(".toothacheChangeEatingTitle").style.color='red';
        }
    },
    toothHealt:function(){
        var vm=this;
        if(vm.toothHealt!==''){
            document.querySelector(".toothHealtTitle").style.color='black';
        }
        else{
            document.querySelector(".toothHealtTitle").style.color='red';
        }
    },
    OilLevel:function(){
        var vm=this;
        if(vm.OilLevel!==''){
            document.querySelector(".OilLevelTitle").style.color='black';
        }
        else{
            document.querySelector(".OilLevelTitle").style.color='red';
        }

    },



    },//witchEnd




})

document.querySelector('.basicId').addEventListener('blur',checkContent,false);
document.querySelector('.name').addEventListener('blur',checkContent,false);
document.querySelector('.height').addEventListener('blur',checkContent,false);
document.querySelector('.weight').addEventListener('blur',checkContent,false);
document.querySelector('.age').addEventListener('blur',checkContent,false);
document.querySelector('.education').addEventListener('blur',checkContent,false);
document.querySelector('.toothacheChangeEating').addEventListener('blur',checkContent,false);
document.querySelector('.toothHealt').addEventListener('blur',checkContent,false);
document.querySelector('.OilLevel').addEventListener('blur',checkContent,false);




function checkContent(e){
    var str = e.target.value;
    if(str==''){
        alert(e.target.name+'欄位不能為空')
    }
}

